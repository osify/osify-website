/**
 * Restore the standalone WordPress pages from the Wayback Machine.
 *
 * The original extractor pulled `type: post` only, so the site's static pages
 * — contact, links, the author bio, the reading list — were never migrated and
 * their URLs 404 on the new site. The origin server is gone, so the archive is
 * the only remaining copy.
 *
 * Output: src/content/pages/<slug>.md
 *
 *   node scripts/restore-pages.mjs            # skip pages already restored
 *   node scripts/restore-pages.mjs --refresh  # refetch everything
 */
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { SITE_ROOT, ensureDir } from './lib/util.mjs';
import { toFrontmatter } from './lib/yaml.mjs';
import { stripNonPrintable } from './lib/clean.mjs';

const OUT_DIR = path.join(SITE_ROOT, 'src', 'content', 'pages');

/**
 * `slug` is the URL on the new site; `legacy` the paths that must redirect to
 * it. The author bio moves to a shorter address at the author's request.
 */
const PAGES = [
  { legacy: '/mr-pongsa-metrey-sok/', slug: 'pongsametrey', title: 'Pongsa Metrey Sok', order: 1 },
  { legacy: '/contact/', slug: 'contact', title: 'Contact', order: 2 },
  { legacy: '/links/', slug: 'links', title: 'Links', order: 3 },
  { legacy: '/programming-books/', slug: 'programming-books', title: 'Programming Books', order: 4 },
  { legacy: '/music/', slug: 'music', title: 'Music', order: 5 },
  { legacy: '/jobs/', slug: 'jobs', title: 'Jobs', order: 6 },
  { legacy: '/associated-store/', slug: 'associated-store', title: 'Associated Store', order: 7 },
];

/*
  Deliberately not restored — the captures contain no recoverable content:

    /popular-posts/  a "most read" widget rendered from 2011 traffic data, with
                     relative timestamps ("Posted 121 days ago") that mean
                     nothing now. The archive supersedes it.
    /links/          rendered by the Link Library plugin; the capture holds the
                     unexpanded [link-library] shortcodes only.
    /events/         a calendar widget; the capture is a grid of bare day
                     numbers.
    /forums/         empty in every capture.
*/

const UA = 'Mozilla/5.0 (compatible; osify-archive-restore/1.0)';

async function getJson(url, attempts = 4) {
  for (let i = 0; i < attempts; i++) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': UA, accept: 'application/json' } });
      const text = await r.text();
      if (!text.trim().startsWith('[')) throw new Error('not JSON (rate limited?)');
      return JSON.parse(text);
    } catch (e) {
      if (i === attempts - 1) throw e;
      await new Promise((r) => setTimeout(r, 2500 * (i + 1)));
    }
  }
}

/** Newest capture wins ties; the largest is usually the most complete. */
async function bestSnapshot(legacy) {
  const url = `http://web.archive.org/cdx/search/cdx?url=osify.com${legacy}&output=json&fl=timestamp,statuscode,length&filter=statuscode:200&limit=-8`;
  const rows = await getJson(url);
  if (!rows || rows.length < 2) return null;
  const data = rows.slice(1).sort((a, b) => Number(b[2]) - Number(a[2]));
  return data[0][0];
}

async function fetchArchived(timestamp, legacy) {
  // `id_` returns the original bytes without the Wayback toolbar injected.
  const url = `https://web.archive.org/web/${timestamp}id_/https://osify.com${legacy}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.text();
    } catch (e) {
      if (i === 2) throw e;
      await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

const CONTENT_SELECTORS = [
  '.entry-content',
  '.post-content',
  '.page-content',
  'article .content',
  '#content .post',
  '#content',
  '#main',
  'article',
];

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
});
turndown.addRule('stripScripts', {
  filter: ['script', 'style', 'noscript', 'iframe', 'form', 'input', 'button'],
  replacement: () => '',
});

function extract(html) {
  const $ = cheerio.load(html);

  // Wayback's own chrome, plus the site's furniture.
  $(
    '#wm-ipp-base, #wm-ipp, script, style, noscript, nav, header, footer, .sidebar, #sidebar, ' +
      '.widget, .comments, #comments, .comment-respond, .navigation, .nav-links, .breadcrumb, ' +
      '.sharedaddy, .jp-relatedposts, .wp-caption-text ~ *, .post-meta, .entry-meta'
  ).remove();

  let container = null;
  for (const selector of CONTENT_SELECTORS) {
    const el = $(selector).first();
    if (el.length && el.text().trim().length > 60) {
      container = el;
      break;
    }
  }
  if (!container) return { title: null, markdown: '' };

  /*
    The 2011-era theme put the site name in <h1> and the page name in an <h2>
    link, so the obvious selectors return "OSIFY – Technologies by favorite"
    for every page. Anything that looks like the site name is rejected in
    favour of the configured title.
  */
  const candidates = [
    $('h1.entry-title').first().text(),
    $('.entry-title').first().text(),
    container.find('h2 a').first().text(),
    $('h1').first().text(),
  ];
  const title =
    candidates
      .map((t) => (t ?? '').trim())
      .find((t) => t && !/^osify\b/i.test(t) && !/^protected:/i.test(t)) || null;

  // Headings that merely repeat the page title are layout, not content.
  container.find('h1, h2').each((_, el) => {
    const text = $(el).text().trim();
    if (!text || /^osify\b/i.test(text) || (title && text.replace(/^Protected:\s*/i, '') === title)) {
      $(el).remove();
    }
  });

  // WordPress plugin furniture that survived into the capture.
  container.find('a[href*="printpage"], a[href*="/author/"], img[src*="wp-print"]').remove();

  const markdown = turndown.turndown(container.html() ?? '');
  return { title, markdown };
}

function tidy(markdown) {
  return (
    stripNonPrintable(markdown)
      .replace(/\r\n/g, '\n')
      // Wayback rewrites every link through its own host; point them back home.
      .replace(/https?:\/\/web\.archive\.org\/web\/\d+\w*\//g, '')
      // Internal links become site-relative so they survive the domain move.
      .replace(/\]\(https?:\/\/(?:www\.)?osify\.com/g, '](https://osify.com')
      // Empty anchors and stray print links left by the theme.
      .replace(/\[\s*\]\([^)]*\)/g, '')
      .replace(/^.*Print This Page.*$/gim, '')
      .replace(/[ \t]+$/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  );
}

/**
 * Some pages were rendered entirely by plugins, so the capture holds only the
 * unexpanded shortcodes — `[link-library settings=1]` and friends. There is no
 * content to restore in that case, and publishing the shortcodes would be
 * worse than leaving the URL alone.
 */
function isSalvageable(body) {
  const withoutShortcodes = body.replace(/\\?\[[a-z][a-z0-9-]*(?:\s[^\]]*)?\\?\]/gi, '').trim();
  const words = withoutShortcodes.split(/\s+/).filter((w) => /[a-z]{3}/i.test(w));
  return words.length >= 8;
}

async function main() {
  const refresh = process.argv.includes('--refresh');
  ensureDir(OUT_DIR);

  const results = [];
  for (const page of PAGES) {
    const outFile = path.join(OUT_DIR, `${page.slug}.md`);
    if (!refresh && fs.existsSync(outFile)) {
      console.log(`  ${page.slug.padEnd(20)} already restored, skipping`);
      continue;
    }

    try {
      const timestamp = await bestSnapshot(page.legacy);
      if (!timestamp) {
        console.log(`  ${page.slug.padEnd(20)} no snapshot`);
        results.push({ ...page, ok: false, reason: 'no snapshot' });
        continue;
      }

      const html = await fetchArchived(timestamp, page.legacy);
      const { title, markdown } = extract(html);
      const body = tidy(markdown);

      if (!isSalvageable(body)) {
        console.log(
          `  ${page.slug.padEnd(20)} nothing worth restoring (${body.length} chars, no real prose)`
        );
        results.push({ ...page, ok: false, reason: 'no salvageable content' });
        continue;
      }

      const captured = `${timestamp.slice(0, 4)}-${timestamp.slice(4, 6)}-${timestamp.slice(6, 8)}`;
      const frontmatter = {
        title: title || page.title,
        order: page.order,
        legacyUrls: [`https://osify.com${page.legacy}`],
        /** Where this text came from, since the original server no longer exists. */
        restoredFrom: {
          snapshot: `https://web.archive.org/web/${timestamp}/https://osify.com${page.legacy}`,
          captured,
        },
        draft: false,
      };

      fs.writeFileSync(outFile, toFrontmatter(frontmatter) + '\n' + body + '\n', 'utf8');
      console.log(`  ${page.slug.padEnd(20)} restored from ${captured}  (${body.length} chars)`);
      results.push({ ...page, ok: true, chars: body.length, captured });
    } catch (error) {
      console.log(`  ${page.slug.padEnd(20)} failed: ${error.message}`);
      results.push({ ...page, ok: false, reason: error.message });
    }
  }

  const ok = results.filter((r) => r.ok).length;
  console.log(`\n${ok} restored, ${results.length - ok} skipped or unavailable.`);
}

main();
