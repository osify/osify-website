/**
 * A tiny, deliberate YAML emitter for post frontmatter.
 *
 * Frontmatter is written by hand rather than by a general serialiser so that
 * dates stay exact ISO strings (no timezone re-interpretation) and Khmer titles
 * are always quoted rather than heuristically bare. Historical metadata must
 * survive a round trip byte-for-byte.
 */

import { stripNonPrintable } from './clean.mjs';

const RULES = [
  /^$/, //                        empty
  /^\s|\s$/, //                   leading or trailing whitespace
  /^[>|*&!%@`{}[\],#?:-]/, //     starts with a YAML indicator
  /:(\s|$)/, //                   "key: value" ambiguity, including a trailing colon
  /\s#/, //                       inline comment ambiguity
  /[\n"']/, //                    newlines or quotes
  /^(true|false|null|yes|no|on|off|~)$/i, // implicit booleans and nulls
  /^[-+]?\d/, //                  would otherwise parse as a number or date
];

export function yamlString(value) {
  // Belt and braces: frontmatter values come from cleaned text, but a single
  // stray control byte here would break the whole document.
  const text = stripNonPrintable(value);
  if (!RULES.some((rule) => rule.test(text))) return text;
  return `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
}

function emit(key, value, indent = 0) {
  const pad = ' '.repeat(indent);

  if (value === undefined || value === null) return '';

  if (Array.isArray(value)) {
    if (value.length === 0) return `${pad}${key}: []\n`;
    return `${pad}${key}:\n` + value.map((item) => `${pad}  - ${yamlString(item)}\n`).join('');
  }

  if (typeof value === 'object') {
    let out = `${pad}${key}:\n`;
    for (const [k, v] of Object.entries(value)) {
      if (v === undefined || v === null) continue;
      out += emit(k, v, indent + 2);
    }
    return out;
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return `${pad}${key}: ${value}\n`;
  }

  return `${pad}${key}: ${yamlString(value)}\n`;
}

export function toFrontmatter(data) {
  let out = '---\n';
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;
    out += emit(key, value);
  }
  return out + '---\n';
}
