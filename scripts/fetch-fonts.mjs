/**
 * Self-host Kantumruy Pro.
 *
 * The archive is bilingual, and Kantumruy Pro carries both Khmer and Latin in
 * one variable family — so the two scripts share a skeleton instead of being
 * bolted together from two unrelated faces. It is self-hosted rather than
 * loaded from Google's CDN so the site has no third-party runtime dependency
 * and Khmer readers on slow connections get the font from the same origin.
 */
import fs from 'node:fs';
import path from 'node:path';
import { SITE_ROOT, ensureDir, formatBytes } from './lib/util.mjs';

const OUT_DIR = path.join(SITE_ROOT, 'public', 'fonts');
const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap';

// A modern UA string is required or Google serves legacy TTF instead of woff2.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function main() {
  ensureDir(OUT_DIR);

  const cssResponse = await fetch(CSS_URL, { headers: { 'user-agent': UA } });
  if (!cssResponse.ok) throw new Error(`Font CSS request failed: HTTP ${cssResponse.status}`);
  let css = await cssResponse.text();

  const faces = [...css.matchAll(/@font-face\s*{[^}]*}/g)].map((m) => m[0]);
  console.log(`${faces.length} @font-face blocks returned.`);

  const downloaded = new Map();
  let total = 0;

  for (const match of css.matchAll(/url\((https:\/\/[^)]+\.woff2)\)/g)) {
    const url = match[1];
    if (downloaded.has(url)) continue;

    // Name files by subset + style so the directory is readable.
    const block = faces.find((f) => f.includes(url)) || '';
    const subset = (css.slice(0, css.indexOf(url)).match(/\/\*\s*([a-z0-9-]+)\s*\*\/(?![\s\S]*\/\*)/i) || [])[1];
    const italic = /font-style:\s*italic/.test(block);
    const name = `kantumruy-pro-${subset || 'subset'}${italic ? '-italic' : ''}.woff2`;

    const response = await fetch(url, { headers: { 'user-agent': UA } });
    if (!response.ok) {
      console.warn(`  ! ${url} -> HTTP ${response.status}`);
      continue;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(path.join(OUT_DIR, name), buffer);
    downloaded.set(url, name);
    total += buffer.length;
    console.log(`  ${name.padEnd(42)} ${formatBytes(buffer.length)}`);
  }

  // Rewrite the CSS to point at the local copies.
  for (const [url, name] of downloaded) {
    css = css.replaceAll(url, `/fonts/${name}`);
  }
  css =
    `/* Kantumruy Pro — self-hosted. Regenerate with \`node scripts/fetch-fonts.mjs\`.\n` +
    `   Licensed under the SIL Open Font License 1.1. */\n` +
    css;
  fs.writeFileSync(path.join(SITE_ROOT, 'src', 'styles', 'fonts.css'), css, 'utf8');

  console.log(`\n${downloaded.size} files, ${formatBytes(total)} -> public/fonts`);
  console.log('CSS -> src/styles/fonts.css');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
