import fs from 'node:fs';
import path from 'node:path';

/** Root of the extracted WordPress archive produced by ask-osify/extract_site.py. */
export const DATA_ROOT = path.resolve(process.cwd(), '..', 'ask-osify', 'data');
export const SITE_ROOT = process.cwd();
export const MIGRATION_DIR = path.join(SITE_ROOT, '.migration');

export const SITES = ['ask', 'osify'];

export const HOSTS = {
  ask: 'ask.osify.com',
  osify: 'osify.com',
};

export function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function writeJson(file, value) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

/** Normalise any path to forward slashes so maps are platform-independent. */
export function toPosix(p) {
  return p.split(path.sep).join('/');
}

const KHMER = /[ក-៿᧠-᧿]/;

/** True when the text is predominantly Khmer script. */
export function isKhmer(text) {
  if (!text) return false;
  const khmer = (text.match(/[ក-៿]/g) || []).length;
  const latin = (text.match(/[A-Za-z]/g) || []).length;
  return khmer > 0 && khmer >= latin;
}

export function hasKhmer(text) {
  return KHMER.test(text || '');
}

/**
 * ASCII-only slug. Khmer and other non-Latin text yields an empty string, which
 * callers fall back to the numeric post id for — the archive never exposes a
 * non-ASCII URL.
 */
export function asciiSlug(input) {
  if (!input) return '';
  return String(input)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’‘"“”]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 80)
    .replace(/-+$/g, '');
}

/** A short, stable, human-readable file name fragment. */
export function safeFileStem(name) {
  const stem = asciiSlug(name.replace(/\.[^.]+$/, ''));
  return stem || 'image';
}

export function pad(n, width = 2) {
  return String(n).padStart(width, '0');
}

/** Format a Date-like value as YYYY-MM-DD without timezone drift. */
export function isoDate(value) {
  const d = value instanceof Date ? value : new Date(value);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Run `worker` over `items` with bounded concurrency. */
export async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(1)} ${units[unit]}`;
}
