/**
 * computer-experience.blogspot.com — the blog osify.com grew out of.
 *
 * The Blogger site ran from 2008-10-23 until April 2010, when its author
 * exported everything to osify.com and posted a sign-off saying so. 28 of its
 * 29 posts are therefore already in this archive, under the WordPress copies
 * that were imported from it — the same text, dated a day later by the
 * importer's timezone handling.
 *
 * So this script does not re-import those 28. It records the Blogger URL on
 * the article that already exists, which is the fact worth keeping: where each
 * piece was first published. Only genuinely absent posts are created.
 *
 * Runs AFTER scripts/migrate.mjs, which rewrites src/content/posts wholesale.
 *
 *   node scripts/migrate-blogspot.mjs           # use the cached feed
 *   node scripts/migrate-blogspot.mjs --refresh # refetch from Blogger
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import TurndownService from 'turndown';
import { SITE_ROOT, ensureDir, readJson, writeJson, asciiSlug, isKhmer } from './lib/util.mjs';
import { toFrontmatter } from './lib/yaml.mjs';
import { makeExcerpt, stripNonPrintable } from './lib/clean.mjs';

const BLOG_HOST = 'computer-experience.blogspot.com';
const FEED_URL = `https://${BLOG_HOST}/feeds/posts/default?alt=json&max-results=500`;
const CACHE = path.join(SITE_ROOT, 'src', 'data', 'blogspot-feed.json');
const POSTS_DIR = path.join(SITE_ROOT, 'src', 'content', 'posts');

/** Every article from this blog is by the same person, recorded as MTR. */
const AUTHOR = 'MTR';

/**
 * Not worth carrying across: the April 2010 sign-off announcing the move to
 * osify.com. It is housekeeping about the old blog rather than an article, and
 * the move it describes is already recorded by the Blogger links this script
 * adds to every migrated piece.
 */
const SKIP_TITLES = new Set([normaliseTitle('TEMPORARY NO MORE MAITENANCE ON THIS BLOG')]);

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

function normaliseTitle(title) {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
const normalise = normaliseTitle;

async function loadFeed(refresh) {
  if (!refresh && fs.existsSync(CACHE)) return readJson(CACHE);
  const response = await fetch(FEED_URL, {
    headers: { 'user-agent': 'osify-archive-migration/1.0', accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`Blogger feed returned HTTP ${response.status}`);
  const json = await response.json();
  ensureDir(path.dirname(CACHE));
  writeJson(CACHE, json);
  return json;
}

function bloggerPostId(entry) {
  const match = /post-(\d+)/.exec(entry.id?.$t ?? '');
  return match ? Number(match[1]) : 0;
}

function permalink(entry) {
  return (entry.link ?? []).find((l) => l.rel === 'alternate')?.href ?? `https://${BLOG_HOST}/`;
}

async function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error('No migrated posts found — run `npm run migrate` first.');
    process.exit(1);
  }

  const feed = await loadFeed(process.argv.includes('--refresh'));
  const entries = feed.feed?.entry ?? [];
  console.log(`${entries.length} posts in the Blogger feed.`);

  // Index the existing archive by normalised title.
  const existing = new Map();
  for (const name of fs.readdirSync(POSTS_DIR)) {
    if (!name.endsWith('.md')) continue;
    const file = path.join(POSTS_DIR, name);
    const parsed = matter(fs.readFileSync(file, 'utf8'));
    existing.set(normalise(parsed.data.title), { file, parsed });
  }

  let credited = 0;
  let created = 0;
  let skipped = 0;
  const takenSlugs = new Set([...fs.readdirSync(POSTS_DIR)].map((n) => n.replace(/\.md$/, '')));

  for (const entry of entries) {
    const title = entry.title?.$t ?? '';
    const url = permalink(entry);
    const published = entry.published?.$t ?? '';

    if (SKIP_TITLES.has(normalise(title))) {
      skipped++;
      continue;
    }

    const match = existing.get(normalise(title));

    if (match) {
      // Already here under its WordPress copy — record where it started.
      const { file, parsed } = match;
      if (parsed.data.originalSource?.url === url) continue;

      const data = {
        ...parsed.data,
        originalSource: {
          platform: 'Blogger',
          host: BLOG_HOST,
          url,
          published,
        },
      };
      // gray-matter gives Date objects back; re-emit the raw strings so the
      // stored timestamps stay byte-identical.
      const raw = matter(fs.readFileSync(file, 'utf8'), { excerpt: false });
      const original = raw.matter.match(/^date:\s*(.+)$/m)?.[1]?.replace(/^["']|["']$/g, '');
      const originalModified = raw.matter.match(/^modified:\s*(.+)$/m)?.[1]?.replace(/^["']|["']$/g, '');
      if (original) data.date = original;
      if (originalModified) data.modified = originalModified;

      fs.writeFileSync(file, toFrontmatter(data) + '\n' + parsed.content.replace(/^\n+/, ''), 'utf8');
      credited++;
      continue;
    }

    // Genuinely absent — create it.
    const body = stripNonPrintable(turndown.turndown(entry.content?.$t ?? '')).trim();
    if (!body) {
      console.warn(`  ! ${title} has no content, skipped`);
      continue;
    }

    let slug = asciiSlug(title) || String(bloggerPostId(entry));
    while (takenSlugs.has(slug)) slug = `${slug}-${bloggerPostId(entry)}`;
    takenSlugs.add(slug);

    const tags = (entry.category ?? []).map((c) => c.term).filter(Boolean);
    const frontmatter = {
      title,
      date: published,
      modified: entry.updated?.$t ?? published,
      author: AUTHOR,
      categories: [],
      tags,
      lang: isKhmer(title) ? 'km' : 'en',
      excerpt: makeExcerpt(body),
      origin: {
        site: 'blogspot',
        id: bloggerPostId(entry),
        url,
        host: BLOG_HOST,
      },
      legacyUrls: [],
      mergedFrom: [],
      mediaCount: 0,
      featured: false,
      draft: false,
    };

    fs.writeFileSync(path.join(POSTS_DIR, `${slug}.md`), toFrontmatter(frontmatter) + '\n' + body + '\n', 'utf8');
    console.log(`  + created /posts/${slug}/`);
    created++;
  }

  console.log('');
  console.log(`Credited to Blogger : ${credited} existing articles now record where they were first published`);
  console.log(`Created             : ${created} new article(s)`);
  console.log(`Skipped by request  : ${skipped} (the sign-off notice)`);
  console.log(`Already present     : ${entries.length - created - skipped} (same text, migrated via WordPress in 2010)`);
}

main();
