/**
 * Fold author aliases onto one identity.
 *
 * The two WordPress installs recorded the same person under two logins: the
 * "MTR" byline and the "osify" byline are both Sok Pongsametrey. "sysomeho" is
 * a different person and is left alone.
 *
 * The displayed byline is unified so readers see one author, but the byline
 * each article was actually published under is kept in `originalAuthor`. This
 * archive exists to preserve the record, so nothing that WordPress wrote down
 * is thrown away — it is only presented more honestly.
 *
 * Runs AFTER scripts/migrate.mjs, which rewrites src/content/posts wholesale.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { SITE_ROOT } from './lib/util.mjs';
import { toFrontmatter } from './lib/yaml.mjs';

const POSTS_DIR = path.join(SITE_ROOT, 'src', 'content', 'posts');

/** recorded byline -> the identity it should be shown under */
const ALIASES = {
  MTR: 'osify',
};

function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error('No migrated posts found — run `npm run migrate` first.');
    process.exit(1);
  }

  let changed = 0;
  const counts = {};

  for (const name of fs.readdirSync(POSTS_DIR)) {
    if (!name.endsWith('.md')) continue;
    const file = path.join(POSTS_DIR, name);
    const raw = fs.readFileSync(file, 'utf8');
    const parsed = matter(raw);
    const recorded = parsed.data.author;
    const canonical = ALIASES[recorded];
    if (!canonical) continue;

    const data = { ...parsed.data, author: canonical, originalAuthor: recorded };

    // gray-matter hands dates back as Date objects; re-emit the stored strings
    // so the historical timestamps stay byte-identical.
    for (const key of ['date', 'modified']) {
      const stored = new RegExp(`^${key}:\\s*(.+)$`, 'm').exec(parsed.matter)?.[1];
      if (stored) data[key] = stored.replace(/^["']|["']$/g, '');
    }

    fs.writeFileSync(file, toFrontmatter(data) + '\n' + parsed.content.replace(/^\n+/, ''), 'utf8');
    counts[recorded] = (counts[recorded] || 0) + 1;
    changed++;
  }

  for (const [from, count] of Object.entries(counts)) {
    console.log(`  ${from} -> ${ALIASES[from]}: ${count} article(s), original byline kept in originalAuthor`);
  }
  console.log(`${changed} article(s) re-attributed.`);
}

main();
