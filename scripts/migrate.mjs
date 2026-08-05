/**
 * Article migration: ask.osify.com + osify.com  ->  src/content/posts
 *
 * Guarantees:
 *  - Every historical field (author, date, modified, original id, original URL)
 *    is carried across verbatim. Nothing is regenerated or inferred.
 *  - Slugs are ASCII only: an English slug where the title has one, otherwise
 *    the original numeric WordPress id. Never Khmer.
 *  - Duplicate articles are merged into a single canonical post; the losers
 *    become redirects, and their ids are recorded in `mergedFrom`.
 *  - Every legacy permalink is recorded so redirect stubs can be generated.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {
  DATA_ROOT,
  SITE_ROOT,
  MIGRATION_DIR,
  HOSTS,
  ensureDir,
  readJson,
  writeJson,
  isKhmer,
  hasKhmer,
  asciiSlug,
} from './lib/util.mjs';
import { cleanBody, makeExcerpt, toPlainText } from './lib/clean.mjs';
import { toFrontmatter } from './lib/yaml.mjs';

const POSTS_OUT = path.join(SITE_ROOT, 'src', 'content', 'posts');
const MEDIA_MAP_FILE = path.join(MIGRATION_DIR, 'media-map.json');

/** Stands in for images that 404 on the source server as well. */
const MISSING_IMAGE = '/media/missing.svg';

// ---------------------------------------------------------------------------
// Media reference rewriting
// ---------------------------------------------------------------------------

function loadMediaMap() {
  if (!fs.existsSync(MEDIA_MAP_FILE)) {
    console.error('Missing .migration/media-map.json — run `npm run migrate:media` first.');
    process.exit(1);
  }
  return readJson(MEDIA_MAP_FILE);
}

/**
 * Resolve one of the extractor's relative refs (`../media/<dir>/<file>`) to the
 * deduplicated public asset URL.
 */
function resolveMedia(map, site, ref) {
  if (!ref) return null;
  const clean = decodeURIComponent(ref.split('?')[0].split('#')[0]);
  const normalize = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

  const match = clean.match(/(?:\.\.\/)?media\/([^/]+)\/(.+)$/);
  if (match) {
    const [, postDir, fileName] = match;
    const base = path.basename(fileName);
    return (
      map.byPostFile[`${site}|${postDir}|${base}`] ||
      map.byDataKey[`${site}/media/${postDir}/${base}`] ||
      map.byBasename[base] ||
      map.byNormalized?.[normalize(base)] ||
      null
    );
  }
  const base = path.basename(clean);
  return map.byBasename[base] || map.byNormalized?.[normalize(base)] || null;
}

/**
 * Is the link closing at `closeIndex` an image (`![alt](url)`) rather than a
 * plain link? Alt text in this archive contains brackets of its own — e.g.
 * `![Morning Activities [1]](…)` — so the opening bracket has to be found by
 * matching depth rather than by a non-greedy pattern.
 */
function isImageRef(text, closeIndex) {
  let depth = 0;
  for (let i = closeIndex; i >= 0; i--) {
    const ch = text[i];
    if (ch === ']') depth++;
    else if (ch === '[') {
      depth--;
      if (depth === 0) return i > 0 && text[i - 1] === '!';
    }
  }
  return false;
}

function rewriteMedia(body, map, external, site, stats) {
  /*
    Rewrites the URL inside every `](url)` — images and links alike — rather
    than trying to match the whole `![alt](url)` construct, because alt text in
    this archive frequently contains its own brackets.
  */
  return body.replace(/\]\(\s*([^)\s]+)([^)]*)\)/g, (whole, url, tail, offset, text) => {
    const isImage = isImageRef(text, offset);

    // Absolute URLs are never archive-relative refs, even when the remote path
    // happens to contain "/media/" (e.g. pbs.twimg.com/media/…).
    if (/^(https?:)?\/\//i.test(url)) {
      const rescued = external.byUrl[url] || external.byUrl[url.replace(/^http:/, 'https:')];
      if (rescued) {
        stats.rescued++;
        return `](${rescued}${tail})`;
      }
      if (isImage) stats.externalImages++;
      return whole;
    }

    if (!/(^|\/)media\//.test(url)) return whole;

    const resolved = resolveMedia(map, site, url);
    if (!resolved) {
      // The file is gone from the source server too. Point at a placeholder so
      // the document keeps its shape and the build does not fail on a path
      // that can never resolve.
      stats.unresolvedMedia.push(`${site}: ${url}`);
      return `](${MISSING_IMAGE}${tail})`;
    }
    stats.rewritten++;
    return `](${resolved}${tail})`;
  });
}

/**
 * WordPress wrapped most screenshots in a "click for full size" link back to
 * the original host. Now that the image itself is served locally, point the
 * wrapper at the local asset too rather than leaving a link that will 404 once
 * the old hosting is switched off.
 */
function relinkImageWrappers(body, stats) {
  return body.replace(
    /\[(!\[(?:[^[\]]|\[[^\]]*\])*\]\((\/media\/[^)\s]+)[^)]*\))\]\(https?:\/\/[^)\s]+\)/g,
    (whole, image, localUrl) => {
      stats.relinked++;
      return `[${image}](${localUrl})`;
    }
  );
}

// ---------------------------------------------------------------------------
// Slugs
// ---------------------------------------------------------------------------

/**
 * ASCII slug or numeric id — never Khmer.
 *
 * Predominantly-Khmer titles fall straight through to the numeric id rather
 * than being reduced to whatever stray Latin word they contain, because
 * "ការសិក្សាពីការប្រើប្រាស់ jQuery" would otherwise slug to a useless "jquery".
 */
function chooseSlug(fm) {
  const title = fm.title || '';
  if (!isKhmer(title)) {
    const fromSlug = asciiSlug(fm.slug);
    if (fromSlug && !/^\d+$/.test(fromSlug)) return fromSlug;
    const fromTitle = asciiSlug(title);
    if (fromTitle && fromTitle.length >= 3) return fromTitle;
  }
  return String(fm.id);
}

// ---------------------------------------------------------------------------
// Legacy URLs
// ---------------------------------------------------------------------------

function legacyPathFor(fm) {
  try {
    const url = new URL(fm.url);
    return { host: url.host, path: url.pathname.endsWith('/') ? url.pathname : url.pathname + '/' };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/** Images rescued from remote hosts by scripts/fetch-external.mjs (optional). */
function loadExternalMap() {
  const file = path.join(MIGRATION_DIR, 'external-map.json');
  if (!fs.existsSync(file)) return { byUrl: {} };
  return readJson(file);
}

function main() {
  const index = readJson(path.join(DATA_ROOT, 'index.json'));
  const mediaMap = loadMediaMap();
  const externalMap = loadExternalMap();

  // --- Duplicate resolution: newest wins, older ones merge into it ----------
  /** original `<site>:<id>` -> canonical `<site>:<id>` */
  const mergeInto = new Map();
  for (const group of index.duplicate_groups || []) {
    const members = [...group.members].sort((a, b) => new Date(b.date) - new Date(a.date));
    const [canonical, ...losers] = members;
    for (const loser of losers) {
      mergeInto.set(`${loser.site}:${loser.id}`, `${canonical.site}:${canonical.id}`);
    }
  }

  const stats = {
    rewritten: 0,
    rescued: 0,
    relinked: 0,
    externalImages: 0,
    unresolvedMedia: [],
    cleanedShareBlocks: 0,
    khmerPosts: 0,
    numericSlugs: 0,
  };

  // --- Pass 1: read, clean, assign slugs ------------------------------------
  const drafts = [];
  for (const article of index.articles) {
    const mdPath = path.join(DATA_ROOT, article.md_file);
    if (!fs.existsSync(mdPath)) {
      console.warn(`! missing markdown for ${article.site}:${article.id} (${article.md_file})`);
      continue;
    }
    const parsed = matter(fs.readFileSync(mdPath, 'utf8'));
    const fm = parsed.data;
    const rawBody = parsed.content;
    const body = cleanBody(rawBody);
    if (body.length < rawBody.trim().length) stats.cleanedShareBlocks++;

    drafts.push({
      key: `${fm.site}:${fm.id}`,
      fm,
      body,
      slug: chooseSlug(fm),
      legacy: legacyPathFor(fm),
    });
  }

  const byKey = new Map(drafts.map((d) => [d.key, d]));

  // --- Pass 2: resolve slug collisions deterministically --------------------
  const slugOwners = new Map();
  for (const draft of drafts) {
    if (mergeInto.has(draft.key)) continue; // merged away, needs no slug
    const taken = slugOwners.get(draft.slug);
    if (!taken) {
      slugOwners.set(draft.slug, draft);
      continue;
    }
    // Older article keeps the clean slug; the newer one gets its id appended.
    const [keep, move] = new Date(draft.fm.date) < new Date(taken.fm.date) ? [draft, taken] : [taken, draft];
    slugOwners.set(keep.slug, keep);
    move.slug = `${move.slug}-${move.fm.id}`;
    slugOwners.set(move.slug, move);
    console.log(`  slug collision resolved: ${keep.slug} kept, ${move.key} -> ${move.slug}`);
  }

  // --- Pass 3: write ---------------------------------------------------------
  if (fs.existsSync(POSTS_OUT)) fs.rmSync(POSTS_OUT, { recursive: true });
  ensureDir(POSTS_OUT);

  const redirects = [];
  const searchDocs = [];
  let written = 0;

  for (const draft of drafts) {
    const canonicalKey = mergeInto.get(draft.key);
    if (canonicalKey) {
      // Merged duplicate: no page of its own, just a redirect to the survivor.
      const target = byKey.get(canonicalKey);
      if (draft.legacy && target) {
        redirects.push({
          host: draft.legacy.host,
          from: draft.legacy.path,
          to: `/posts/${target.slug}/`,
          reason: 'merged-duplicate',
        });
      }
      continue;
    }

    const { fm, slug } = draft;
    const site = fm.site;
    const body = relinkImageWrappers(rewriteMedia(draft.body, mediaMap, externalMap, site, stats), stats);
    const featured = resolveMedia(mediaMap, site, fm.featured_image);
    const khmer = hasKhmer(fm.title) || isKhmer(toPlainText(body).slice(0, 600));
    if (khmer) stats.khmerPosts++;
    if (/^\d+$/.test(slug)) stats.numericSlugs++;

    const mergedFrom = [...mergeInto.entries()]
      .filter(([, canonical]) => canonical === draft.key)
      .map(([loser]) => loser);

    const legacyUrls = [fm.url];
    for (const loserKey of mergedFrom) {
      const loser = byKey.get(loserKey);
      if (loser?.fm?.url) legacyUrls.push(loser.fm.url);
    }

    const frontmatter = {
      title: fm.title,
      // Historical timestamps, preserved exactly as WordPress recorded them.
      date: fm.date,
      modified: fm.modified || fm.date,
      author: fm.author,
      categories: fm.categories || [],
      tags: fm.tags || [],
      lang: khmer ? 'km' : 'en',
      excerpt: makeExcerpt(body),
      featuredImage: featured || undefined,
      origin: {
        site,
        id: fm.id,
        url: fm.url,
        host: HOSTS[site],
      },
      legacyUrls,
      mergedFrom,
      mediaCount: fm.media_count || 0,
      featured: false,
      draft: false,
    };

    fs.writeFileSync(path.join(POSTS_OUT, `${slug}.md`), toFrontmatter(frontmatter) + '\n' + body, 'utf8');
    written++;

    if (draft.legacy) {
      redirects.push({
        host: draft.legacy.host,
        from: draft.legacy.path,
        to: `/posts/${slug}/`,
        reason: 'legacy-permalink',
      });
    }

    searchDocs.push({
      slug,
      title: fm.title,
      excerpt: frontmatter.excerpt,
      date: fm.date,
      author: fm.author,
      site,
      lang: frontmatter.lang,
      categories: frontmatter.categories,
      tags: frontmatter.tags,
      text: toPlainText(body).slice(0, 1200),
    });
  }

  // The live search index is generated from the content collection at build
  // time (src/pages/search-index.json.ts) so it can never drift from what is
  // actually published; this copy is written only as a migration artefact.
  writeJson(path.join(MIGRATION_DIR, 'redirects.json'), redirects);
  writeJson(path.join(MIGRATION_DIR, 'search-preview.json'), searchDocs);

  // --- Report ---------------------------------------------------------------
  console.log('');
  console.log(`Articles written   : ${written} (from ${index.articles.length} source articles)`);
  console.log(`Duplicates merged  : ${mergeInto.size}`);
  console.log(`Share blocks removed: ${stats.cleanedShareBlocks}`);
  console.log(`Media refs rewritten: ${stats.rewritten}`);
  console.log(`Remote images rescued: ${stats.rescued} (now served locally)`);
  console.log(`Dead wrapper links fixed: ${stats.relinked}`);
  console.log(`External images left: ${stats.externalImages} (still hotlinked to their origin)`);
  console.log(`Khmer articles     : ${stats.khmerPosts}`);
  console.log(`Numeric slugs      : ${stats.numericSlugs}  ·  English slugs: ${written - stats.numericSlugs}`);
  console.log(`Redirects recorded : ${redirects.length}`);
  if (stats.unresolvedMedia.length) {
    console.log(`\nUnresolved media references (${stats.unresolvedMedia.length}):`);
    for (const ref of stats.unresolvedMedia.slice(0, 20)) console.log(`  - ${ref}`);
  }
}

main();
