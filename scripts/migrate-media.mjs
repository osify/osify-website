/**
 * Media migration: deduplicate, then optimise.
 *
 * The extractor downloaded a copy of every image into every post folder that
 * referenced it, so the raw archive is 1,731 files / ~524 MB but only ~1,459
 * distinct images / ~145 MB. Identical files are merged into a single
 * content-addressed asset, and every reference to any of the copies resolves to
 * that one file.
 *
 * Output:
 *   public/media/<hh>/<hash12>-<name>.webp   deduplicated, resized, WebP
 *   .migration/media-map.json                original path -> public URL
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
  writeJson,
  toPosix,
  safeFileStem,
  pool,
  formatBytes,
} from './lib/util.mjs';

const OUT_ROOT = path.join(SITE_ROOT, 'public', 'media');
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

function collectFiles() {
  const files = [];
  for (const site of SITES) {
    const mediaRoot = path.join(DATA_ROOT, site, 'media');
    if (!fs.existsSync(mediaRoot)) continue;
    const stack = [mediaRoot];
    while (stack.length) {
      const dir = stack.pop();
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          stack.push(full);
          continue;
        }
        const rel = toPosix(path.relative(mediaRoot, full));
        const [postDir, ...rest] = rel.split('/');
        files.push({
          site,
          postDir,
          fileName: rest.join('/') || postDir,
          absolute: full,
          /** Key as referenced from data root, e.g. `ask/media/1011/featured.jpg`. */
          dataKey: `${site}/media/${rel}`,
          size: fs.statSync(full).size,
        });
      }
    }
  }
  return files;
}

function hashFile(file) {
  return crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex');
}

async function main() {
  if (!fs.existsSync(DATA_ROOT)) {
    console.error(`Source archive not found at ${DATA_ROOT}`);
    process.exit(1);
  }

  const files = collectFiles();
  const originalBytes = files.reduce((sum, f) => sum + f.size, 0);
  console.log(`Found ${files.length} media files (${formatBytes(originalBytes)}) across ${SITES.length} sites.`);

  // ---- 1. Deduplicate by content hash -------------------------------------
  console.log('Hashing…');
  const byHash = new Map();
  for (const file of files) {
    const hash = hashFile(file.absolute);
    file.hash = hash;
    if (!byHash.has(hash)) byHash.set(hash, []);
    byHash.get(hash).push(file);
  }
  const groups = [...byHash.values()];
  const duplicateCopies = files.length - groups.length;
  console.log(`${groups.length} unique images — ${duplicateCopies} duplicate copies will be merged.`);

  // ---- 2. Optimise one representative per hash ----------------------------
  ensureDir(OUT_ROOT);
  let converted = 0;
  let failed = 0;
  let outputBytes = 0;

  const outputs = await pool(groups, 8, async (group) => {
    // Prefer the shortest, most descriptive original name for the merged asset.
    const rep = [...group].sort((a, b) => a.fileName.length - b.fileName.length)[0];
    const hash = rep.hash;
    const stem = safeFileStem(path.basename(rep.fileName));
    const shard = hash.slice(0, 2);
    const outName = `${hash.slice(0, 12)}-${stem}.webp`;
    const outDir = path.join(OUT_ROOT, shard);
    const outAbs = path.join(outDir, outName);
    const publicUrl = `/media/${shard}/${outName}`;

    if (fs.existsSync(outAbs)) {
      outputBytes += fs.statSync(outAbs).size;
      return { group, publicUrl, width: null, height: null };
    }

    ensureDir(outDir);
    try {
      const image = sharp(rep.absolute, { failOn: 'none' });
      const meta = await image.metadata();
      const pipeline = image.rotate();
      if (meta.width && meta.width > MAX_WIDTH) {
        pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }
      const info = await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(outAbs);
      converted++;
      outputBytes += info.size;
      if (converted % 100 === 0) console.log(`  …optimised ${converted}/${groups.length}`);
      return { group, publicUrl, width: info.width, height: info.height };
    } catch (error) {
      // Unreadable/corrupt source: copy it through untouched so nothing is lost.
      failed++;
      const fallbackName = `${hash.slice(0, 12)}-${stem}${path.extname(rep.fileName) || '.bin'}`;
      const fallbackAbs = path.join(outDir, fallbackName);
      fs.copyFileSync(rep.absolute, fallbackAbs);
      outputBytes += rep.size;
      console.warn(`  ! could not optimise ${rep.dataKey}: ${error.message}`);
      return { group, publicUrl: `/media/${shard}/${fallbackName}`, width: null, height: null };
    }
  });

  // ---- 3. Build the lookup every duplicate path resolves through ----------
  /** `<site>/media/<postDir>/<file>` -> public URL */
  const byDataKey = {};
  /** `<site>|<postDir>|<file>` -> public URL, for `../media/<dir>/<file>` refs */
  const byPostFile = {};
  /** basename -> public URL, last-resort fallback for odd references */
  const byBasename = {};
  /**
   * Alphanumerics-only basename -> public URL. Some posts reference a file as
   * `BarcampBattambang-20130525-1.jpg` while it was saved as
   * `BarcampBattambang-2013-05-25-1.jpg`; normalising away punctuation
   * reconciles the two.
   */
  const byNormalized = {};
  const dimensions = {};

  const normalize = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const { group, publicUrl, width, height } of outputs) {
    if (width && height) dimensions[publicUrl] = { width, height };
    for (const file of group) {
      byDataKey[file.dataKey] = publicUrl;
      byPostFile[`${file.site}|${file.postDir}|${path.basename(file.fileName)}`] = publicUrl;
      const base = path.basename(file.fileName);
      if (!(base in byBasename)) byBasename[base] = publicUrl;
      const norm = normalize(base);
      if (norm && !(norm in byNormalized)) byNormalized[norm] = publicUrl;
    }
  }

  writeJson(path.join(MIGRATION_DIR, 'media-map.json'), {
    generatedFrom: toPosix(DATA_ROOT),
    stats: {
      sourceFiles: files.length,
      sourceBytes: originalBytes,
      uniqueImages: groups.length,
      duplicateCopiesMerged: duplicateCopies,
      outputBytes,
      optimiseFailures: failed,
    },
    dimensions,
    byDataKey,
    byPostFile,
    byBasename,
    byNormalized,
  });

  console.log('');
  console.log(`Source     : ${files.length} files, ${formatBytes(originalBytes)}`);
  console.log(`Deduped    : ${groups.length} unique (${duplicateCopies} copies merged)`);
  console.log(`Optimised  : ${formatBytes(outputBytes)} in public/media (${failed} passthrough)`);
  console.log(`Saved      : ${formatBytes(originalBytes - outputBytes)} (${((1 - outputBytes / originalBytes) * 100).toFixed(1)}%)`);
  console.log(`Map        : .migration/media-map.json`);
}

main();
