/**
 * Removes the WordPress/Jetpack sharing furniture that the extractor faithfully
 * captured along with the article body. Two shapes exist in the archive:
 *
 *   osify.com  — a `### Share this:` heading followed by a share link list
 *   ask.osify  — a bare trailing list of `?share=…` links, no heading
 *
 * Both always sit at the very end of the document (verified across all 424
 * articles), so cleaning walks backwards from EOF and stops at the first line
 * that is real content.
 */

const SHARE_HEADING = /^#{1,6}\s*(share this|like this|related)\s*:?\s*$/i;

const SHARE_LINK = [
  /\?share=/i,
  /twitter\.com\/share/i,
  /facebook\.com\/sharer/i,
  /tumblr\.com\/share/i,
  /getpocket\.com\/save/i,
  /pinterest\.com\/pin\/create/i,
  /linkedin\.com\/share/i,
  /assets\.pinterest\.com\/images\/pidgets/i,
  /"Click to (share|print|email)/i,
  /^\s*[-*]\s*\[(share|tweet|pocket|email|print|like|reddit)\]\s*\(#?\)/i,
];

/**
 * Characters YAML and HTML both treat as non-printable: C0 controls (tab,
 * newline and carriage return excepted) and the whole C1 block. A couple of
 * articles carry stray U+0081 / U+008F / U+009D bytes left behind by an old
 * encoding mishap — invisible on the page, but enough to make a YAML parser
 * reject the entire document.
 */
const NON_PRINTABLE = new RegExp(
  '[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F-\\u009F]',
  'g'
);

export function stripNonPrintable(text) {
  return String(text).replace(NON_PRINTABLE, '');
}

function isShareListItem(line) {
  if (!/^\s*[-*]\s/.test(line)) return false;
  return SHARE_LINK.some((re) => re.test(line));
}

/** A `[![](pinterest-badge)](share-url)` image-link bullet with no text. */
function isEmptyShareImage(line) {
  return /^\s*[-*]?\s*\[!\[\]\([^)]*\)\]\([^)]*(share|pinterest|tumblr|pocket)[^)]*\)\s*$/i.test(line);
}

export function cleanBody(raw) {
  let text = stripNonPrintable(raw.replace(/\r\n/g, '\n'));

  // 1. Everything from a `### Share this:` style heading onwards is furniture.
  const lines = text.split('\n');
  const headingIndex = lines.findIndex((line) => SHARE_HEADING.test(line));
  if (headingIndex !== -1) {
    lines.length = headingIndex;
  }

  // 2. Walk back from the end dropping bare share bullets and blank lines.
  let end = lines.length;
  while (end > 0) {
    const line = lines[end - 1];
    if (line.trim() === '' || isShareListItem(line) || isEmptyShareImage(line)) {
      end--;
      continue;
    }
    break;
  }
  lines.length = end;

  text = lines.join('\n');

  // 3. Tidy whitespace without touching fenced code blocks' internal spacing.
  text = text
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();

  return text + '\n';
}

/** Strip Markdown down to plain text for excerpts and the search index. */
export function toPlainText(markdown) {
  return stripNonPrintable(markdown)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/[*_~]{1,3}/g, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function makeExcerpt(markdown, limit = 220) {
  const text = toPlainText(markdown);
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}
