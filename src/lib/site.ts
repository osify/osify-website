export const SITE = {
  title: 'OSIFY',
  tagline: 'Notes on code, computing and Cambodia',
  description:
    'A working archive of 423 articles on software, systems and the Cambodian tech scene, written between 2008 and 2021 in English and Khmer.',
  url: 'https://osify.com',
  author: 'OSIFY',
  locale: 'en',
} as const;

/**
 * Reader support link.
 *
 * Deliberately fails closed: while `url` is empty nothing renders anywhere on
 * the site. A placeholder or guessed handle would route readers' money to
 * whoever happens to own that username, so the link only appears once a real
 * one is set here.
 */
export const SUPPORT = {
  url: 'https://buymeacoffee.com/mtstuffs',
  label: 'Buy me a coffee',
  /** Shown above the button. Keep it plain — no guilt, no urgency. */
  blurb:
    'This archive is free to read, has no ads and no tracking. If something here saved you an afternoon, you can put a coffee behind it.',
} as const;

export const supportEnabled = SUPPORT.url.length > 0;

export const NAV = [
  { href: '/archive/', label: 'Archive' },
  { href: '/work/', label: 'Work' },
  { href: '/topics/', label: 'Topics' },
  { href: '/about/', label: 'About' },
] as const;

/** Where each article originally lived, before the two blogs were merged. */
export const ORIGIN_LABELS: Record<string, string> = {
  osify: 'osify.com',
  ask: 'ask.osify.com',
};

export function slugifyTerm(term: string): string {
  return term
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Dates are historical record — always rendered from the stored value as-is. */
export function formatDate(date: Date): string {
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function formatShort(date: Date): string {
  return `${String(date.getUTCDate()).padStart(2, '0')} ${MONTHS[date.getUTCMonth()]}`;
}

export function isoString(date: Date): string {
  return date.toISOString().slice(0, 10);
}
