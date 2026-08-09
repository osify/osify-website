/**
 * Legacy taxonomy / archive redirects for osify.com.
 *
 * Post permalinks (/YYYY/MM/<slug>/) are handled from each article's own
 * `legacyUrls` in src/pages/[...legacy].astro. This script covers everything
 * else the old WordPress site published:
 *
 *   /parts/<cat>/            categories (the category base was "parts")
 *   /parts/<parent>/<child>/ nested categories
 *   /labels/<tag>/           tags
 *   /author/<slug>/          author archives
 *   /YYYY/ and /YYYY/MM/     date archives
 *   /page/N/, /feed/         pagination and feeds, incl. per-taxonomy variants
 *
 * The old slugs are NOT the category names — "Tips" lived at /parts/technical-tips/
 * and "News" at /parts/announcement/ — so the mapping has to come from the
 * taxonomy dump rather than from re-slugifying the display name.
 *
 * Two sources are combined:
 *   1. src/data/legacy-paths.txt — real URLs recovered from the Wayback Machine
 *      (the origin server is gone, so this is the only record of what existed).
 *   2. Rules applied to every known slug, so a URL that Wayback never captured
 *      still resolves.
 *
 * Output: src/data/legacy-redirects.json
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { SITE_ROOT, DATA_ROOT, readJson, writeJson } from './lib/util.mjs';

const PATHS_FILE = path.join(SITE_ROOT, 'src', 'data', 'legacy-paths.txt');
const OUT_FILE = path.join(SITE_ROOT, 'src', 'data', 'legacy-redirects.json');

/** Must match slugifyTerm() in src/lib/site.ts. */
function slugifyTerm(term) {
  return term
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** WordPress leaves HTML entities in taxonomy names ("Reparing &amp; Support"). */
function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// ---------------------------------------------------------------------------
// Taxonomy maps: original WordPress slug -> destination on the new site
// ---------------------------------------------------------------------------
// (declared after the article scan below, which fills the `built*` sets these
//  depend on)

const categoryTargets = new Map(); // old slug -> /categories/<new>/
const tagTargets = new Map(); //      old slug -> /topics/<new>/
const authorTargets = new Map(); //   old slug -> /authors/<new>/

function buildTaxonomyMaps() {
for (const site of ['osify', 'ask']) {
  const file = path.join(DATA_ROOT, site, 'taxonomies.json');
  if (!fs.existsSync(file)) continue;
  const tax = readJson(file);

  // Terms with no surviving posts have no page to point at, so they fall back
  // to the relevant index rather than to a URL that 404s.
  for (const category of tax.categories ?? []) {
    const slug = slugifyTerm(decodeEntities(category.name));
    const target = builtCategories.has(slug) ? `/categories/${slug}/` : '/topics/';
    if (!categoryTargets.has(category.slug)) categoryTargets.set(category.slug, target);
  }
  for (const tag of tax.tags ?? []) {
    const slug = slugifyTerm(decodeEntities(tag.name));
    const target = builtTags.has(slug) ? `/topics/${slug}/` : '/topics/';
    if (!tagTargets.has(tag.slug)) tagTargets.set(tag.slug, target);
  }
  for (const author of tax.authors ?? []) {
    const slug = slugifyTerm(author.name);
    const target = builtAuthors.has(slug) ? `/authors/${slug}/` : '/about/';
    if (author.slug && !authorTargets.has(author.slug)) authorTargets.set(author.slug, target);
  }
}
}

// ---------------------------------------------------------------------------
// Article slugs: every name an article was ever reachable under
// ---------------------------------------------------------------------------

/**
 * The date in an old permalink is unreliable — the site used /YYYY/MM/<slug>/
 * later and /YYYY/MM/DD/<slug>/ in its early years, and Wayback captured both
 * for some posts. The slug is the stable part, so date permalinks are matched
 * on the slug alone.
 */
const articleSlugs = new Map(); // old slug -> new slug

/**
 * Which taxonomy pages the site actually builds. The taxonomy dump lists every
 * term the two WordPress installs ever defined, including ones with no
 * surviving posts — pointing a redirect at those would swap a 404 on the old
 * URL for a 404 on a new one.
 */
const builtCategories = new Set();
const builtTags = new Set();
const builtAuthors = new Set();

const postsDir = path.join(SITE_ROOT, 'src', 'content', 'posts');
if (fs.existsSync(postsDir)) {
  for (const name of fs.readdirSync(postsDir)) {
    if (!name.endsWith('.md')) continue;
    const slug = name.replace(/\.md$/, '');
    articleSlugs.set(slug, slug);
    const { data } = matter(fs.readFileSync(path.join(postsDir, name), 'utf8'));

    for (const c of data.categories ?? []) builtCategories.add(slugifyTerm(c));
    for (const t of data.tags ?? []) builtTags.add(slugifyTerm(t));
    if (data.author) builtAuthors.add(slugifyTerm(data.author));

    for (const url of data.legacyUrls ?? []) {
      try {
        const parts = new URL(url).pathname.split('/').filter(Boolean);
        const last = parts[parts.length - 1];
        if (last && !articleSlugs.has(last)) articleSlugs.set(last, slug);
      } catch {
        /* ignore malformed */
      }
    }
  }
}

// Safe to build now that we know which taxonomy pages actually exist.
buildTaxonomyMaps();

// ---------------------------------------------------------------------------
// Resolve a single legacy path
// ---------------------------------------------------------------------------

/**
 * Strip the trailing decorations WordPress hung off every URL: /feed/, /amp/,
 * /print/ and /page/N/.
 */
const DECORATIONS = new Set(['feed', 'amp', 'print', 'embed', 'trackback']);

function stripSuffixes(segments) {
  const out = [...segments];
  let feed = false;
  while (out.length) {
    const last = out[out.length - 1];
    if (DECORATIONS.has(last) || /^comment-page-\d+$/.test(last)) {
      if (last === 'feed') feed = true;
      out.pop();
      continue;
    }
    if (/^\d+$/.test(last) && out[out.length - 2] === 'page') {
      out.splice(out.length - 2, 2);
      continue;
    }
    break;
  }
  return { segments: out, feed };
}

function resolve(rawPath) {
  const all = rawPath.split('/').filter(Boolean);
  const { segments, feed } = stripSuffixes(all);

  if (segments.length === 0) return feed ? '/rss.xml' : null; // "/" or "/feed/"

  const [head, ...rest] = segments;

  // /2013/ and /2013/07/ are date archives. Anything deeper is a post
  // permalink in either the /YYYY/MM/<slug>/ or early /YYYY/MM/DD/<slug>/
  // form — matched on its slug, since the date part varies.
  if (/^(19|20)\d{2}$/.test(head)) {
    if (segments.length <= 2) return `/archive/#y${head}`;
    // Walk back from the end: the last segment is usually the slug, but
    // attachment pages append the image name (/…/<slug>/<image>/), so the
    // first segment that names a real article wins.
    for (let i = segments.length - 1; i >= 1; i--) {
      const article = articleSlugs.get(segments[i]);
      if (article) return `/posts/${article}/`;
    }
    // Never migrated — a draft, or a slug that was renamed before the export.
    return null;
  }

  // /page/2/ — homepage pagination (already stripped, so segments is empty
  // above; this catches a bare /page/ with no number).
  if (head === 'page') return '/archive/';

  // Categories: /parts/<...>/<slug>/ — the meaningful slug is the last one.
  if (head === 'parts' || head === 'category') {
    for (let i = rest.length - 1; i >= 0; i--) {
      const hit = categoryTargets.get(rest[i]);
      if (hit) return feed ? '/rss.xml' : hit;
    }
    return '/topics/';
  }

  // Tags: /labels/<slug>/ (the tag base was "labels").
  if (head === 'labels' || head === 'tag') {
    const hit = rest.length ? tagTargets.get(rest[rest.length - 1]) : null;
    if (hit) return feed ? '/rss.xml' : hit;
    return '/topics/';
  }

  if (head === 'author') {
    const hit = rest.length ? authorTargets.get(rest[0]) : null;
    return hit ?? '/about/';
  }

  // Anything else — standalone WordPress pages, the /events/ holiday section —
  // has no equivalent in this archive. Left to 404 honestly rather than
  // bounced to the homepage, which would be a soft 404.
  return null;
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

const redirects = new Map(); // from (no leading/trailing slash) -> to
const unmapped = [];

/**
 * Hand-decided destinations for pages that could not simply be restored.
 *
 *   associated-store    carried an identical one-line body to
 *                       /programming-books/; kept as one page, not two.
 *   mr-pongsa-metrey-sok was password-protected on the old site, so the only
 *                       thing the Internet Archive holds is the "Protected:"
 *                       title. There is no bio to restore, so the URL points
 *                       at the colophon instead of inventing one.
 */
const MANUAL = {
  'associated-store': '/programming-books/',
  'mr-pongsa-metrey-sok': '/about/',
};

/** Slugs of pages restored from the archive — these render, so never redirect them. */
const restoredPages = new Set();
const pagesDir = path.join(SITE_ROOT, 'src', 'content', 'pages');
if (fs.existsSync(pagesDir)) {
  for (const name of fs.readdirSync(pagesDir)) {
    if (name.endsWith('.md')) restoredPages.add(name.replace(/\.md$/, ''));
  }
}

function add(from, to) {
  const key = from.replace(/^\/+|\/+$/g, '');
  if (!key || !to) return;
  // Never shadow a real page on the new site.
  if (/^(posts|archive|topics|categories|authors|work|about|license)(\/|$)/.test(key)) return;
  if (restoredPages.has(key.split('/')[0])) return;
  if (!redirects.has(key)) redirects.set(key, to);
}

// 1. Every path the Wayback Machine recorded.
if (fs.existsSync(PATHS_FILE)) {
  const lines = fs.readFileSync(PATHS_FILE, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);
  for (const line of lines) {
    const target = resolve(line);
    if (target) add(line, target);
    else unmapped.push(line);
  }
}

// 2. Rule-based coverage, so slugs Wayback never captured still resolve.
for (const [slug, target] of categoryTargets) {
  add(`parts/${slug}`, target);
  add(`category/${slug}`, target);
}
for (const [slug, target] of tagTargets) {
  add(`labels/${slug}`, target);
  add(`tag/${slug}`, target);
}
for (const [slug, target] of authorTargets) {
  add(`author/${slug}`, target);
}
for (let year = 2008; year <= 2021; year++) {
  add(`${year}`, `/archive/#y${year}`);
  for (let month = 1; month <= 12; month++) {
    add(`${year}/${String(month).padStart(2, '0')}`, `/archive/#y${year}`);
  }
}
for (let page = 2; page <= 60; page++) add(`page/${page}`, '/archive/');
add('feed', '/rss.xml');
for (const [from, to] of Object.entries(MANUAL)) add(from, to);

const list = [...redirects.entries()]
  .map(([from, to]) => ({ from, to }))
  .sort((a, b) => a.from.localeCompare(b.from));

writeJson(OUT_FILE, list);

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
const byKind = {};
for (const { from } of list) {
  const kind = from.split('/')[0].replace(/^(19|20)\d{2}$/, '<year>');
  byKind[kind] = (byKind[kind] || 0) + 1;
}

console.log(`Legacy redirects written: ${list.length}  ->  src/data/legacy-redirects.json`);
for (const [kind, count] of Object.entries(byKind).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(4)}  /${kind}/`);
}

if (unmapped.length) {
  console.log(`\n${unmapped.length} archived paths have no equivalent and will 404:`);
  const groups = {};
  for (const p of unmapped) {
    const key = p.split('/').filter(Boolean)[0] ?? '(root)';
    (groups[key] ??= []).push(p);
  }
  for (const [key, paths] of Object.entries(groups).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  ${String(paths.length).padStart(3)}  /${key}/   e.g. ${paths[0]}`);
  }
}
