/**
 * Rescue remotely-hosted images referenced by the archive.
 *
 * A number of older articles never had their images stored on the WordPress
 * sites at all — they point at the author's original Blogger account
 * (*.bp.blogspot.com), at Jetpack's Photon CDN (i0-i2.wp.com, which proxies a
 * real origin URL), or at third-party hosts. Once the old hosting is switched
 * off nobody will notice these breaking, so they are pulled down now, folded
 * into the same deduplicated media store, and served locally.
 *
 * Idempotent and resumable: already-downloaded URLs are skipped, and hosts that
 * are simply gone are recorded so re-runs do not retry them forever.
 *
 * Output: .migration/external-map.json  (original URL -> local public URL)
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
import {
  DATA_ROOT,
  SITE_ROOT,
  MIGRATION_DIR,
  SITES,
  ensureDir,
  readJson,
  writeJson,
  safeFileStem,
  pool,
  formatBytes,
} from './lib/util.mjs';

const OUT_ROOT = path.join(SITE_ROOT, 'public', 'media');
const MAP_FILE = path.join(MIGRATION_DIR, 'external-map.json');
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;
const TIMEOUT_MS = 20000;
const RETRIES = 2;

/**
 * Jetpack Photon URLs (`https://i2.wp.com/example.com/a.png?resize=…`) are a CDN
 * wrapper around a real origin. Unwrap to the origin and drop the resize query
 * so the full-resolution original is fetched.
 */
function unwrapPhoton(url) {
  const match = url.match(/^https?:\/\/i[0-2]\.wp\.com\/(.+)$/i);
  if (!match) return url;
  const inner = match[1].split('?')[0];
  return `https://${inner}`;
}

/** Blogger serves sized variants under /sNNN/; /s0/ is the original. */
function preferOriginal(url) {
  return url.replace(/\/s\d+(-h)?\//, '/s0/');
}

function collectExternalUrls() {
  const urls = new Map(); // url -> count
  for (const site of SITES) {
    const dir = path.join(DATA_ROOT, site, 'posts');
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      const text = fs.readFileSync(path.join(dir, name), 'utf8');
      for (const match of text.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)/g)) {
        const url = match[1];
        urls.set(url, (urls.get(url) || 0) + 1);
      }
    }
  }
  return urls;
}

async function download(url) {
  let lastError;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        redirect: 'follow',
        headers: {
          'user-agent': 'Mozilla/5.0 (compatible; osify-archive-migration/1.0)',
          accept: 'image/*,*/*;q=0.8',
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 100) throw new Error('response too small to be an image');
      return buffer;
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

async function main() {
  const existing = fs.existsSync(MAP_FILE) ? readJson(MAP_FILE) : { byUrl: {}, failed: {} };
  existing.byUrl ??= {};
  existing.failed ??= {};

  const found = collectExternalUrls();
  const retryFailed = process.argv.includes('--retry-failed');

  const todo = [...found.keys()].filter((url) => {
    if (existing.byUrl[url]) return false;
    if (!retryFailed && existing.failed[url]) return false;
    return true;
  });

  console.log(`${found.size} distinct remote images referenced.`);
  console.log(`${Object.keys(existing.byUrl).length} already rescued, ${todo.length} to fetch.`);
  if (!todo.length) {
    writeJson(MAP_FILE, existing);
    return;
  }

  let ok = 0;
  let failed = 0;
  let bytes = 0;

  await pool(todo, 6, async (url) => {
    const target = preferOriginal(unwrapPhoton(url));
    let buffer;
    try {
      buffer = await download(target);
    } catch (error) {
      // Fall back through progressively less-rewritten forms of the URL. A
      // Photon origin can be long gone while the CDN still holds a copy, and
      // Blogger's /s0/ rewrite 404s on some older uploads.
      const fallbacks = [unwrapPhoton(url), url].filter((candidate) => candidate !== target);
      for (const candidate of fallbacks) {
        try {
          buffer = await download(candidate);
          break;
        } catch {
          /* try the next form */
        }
      }
      if (!buffer) {
        existing.failed[url] = error.message;
        failed++;
        return;
      }
    }

    const hash = crypto.createHash('sha1').update(buffer).digest('hex');
    const shard = hash.slice(0, 2);
    const stem = safeFileStem(path.basename(new URL(target).pathname) || 'remote');
    const outName = `${hash.slice(0, 12)}-${stem}.webp`;
    const outDir = path.join(OUT_ROOT, shard);
    const outAbs = path.join(outDir, outName);
    const publicUrl = `/media/${shard}/${outName}`;

    if (!fs.existsSync(outAbs)) {
      ensureDir(outDir);
      try {
        const image = sharp(buffer, { failOn: 'none' });
        const meta = await image.metadata();
        const pipeline = image.rotate();
        if (meta.width && meta.width > MAX_WIDTH) {
          pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
        }
        const info = await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(outAbs);
        bytes += info.size;
      } catch (error) {
        existing.failed[url] = `not an image: ${error.message}`;
        failed++;
        return;
      }
    }

    existing.byUrl[url] = publicUrl;
    delete existing.failed[url];
    ok++;
    if (ok % 20 === 0) console.log(`  …rescued ${ok}/${todo.length}`);
  });

  writeJson(MAP_FILE, existing);

  console.log('');
  console.log(`Rescued : ${ok} images (${formatBytes(bytes)} added)`);
  console.log(`Failed  : ${failed} (host gone or not an image — left hotlinked)`);
  console.log(`Map     : .migration/external-map.json`);

  const byHost = {};
  for (const url of Object.keys(existing.failed)) {
    try {
      const host = new URL(url).host;
      byHost[host] = (byHost[host] || 0) + 1;
    } catch {
      /* ignore */
    }
  }
  const hosts = Object.entries(byHost).sort((a, b) => b[1] - a[1]);
  if (hosts.length) {
    console.log('\nUnreachable hosts:');
    for (const [host, count] of hosts) console.log(`  ${count.toString().padStart(3)}  ${host}`);
  }
}

main();
