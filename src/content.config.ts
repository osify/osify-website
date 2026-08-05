import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Every field that existed on the original WordPress articles is preserved
 * verbatim here — author, publish date, modified date, the original post id and
 * the original permalink. This archive is historical record first and a website
 * second, so the migration never regenerates any of it.
 */
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Original publish time, exactly as WordPress recorded it. */
    date: z.coerce.date(),
    /** Original last-modified time. Equal to `date` when never edited. */
    modified: z.coerce.date(),
    /** Original author login — never normalised or reassigned. */
    author: z.string(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    /** Dominant script of the article, used to pick the right type stack. */
    lang: z.enum(['en', 'km']).default('en'),
    excerpt: z.string().default(''),
    featuredImage: z.string().optional(),
    /** Provenance of the article before the two blogs were merged. */
    origin: z.object({
      site: z.enum(['ask', 'osify']),
      /** WordPress post id on that site. */
      id: z.number(),
      /** The canonical URL this article lived at before the migration. */
      url: z.string().url(),
      host: z.string(),
    }),
    /** Old URLs that must keep resolving; each gets a redirect stub. */
    legacyUrls: z.array(z.string()).default([]),
    /** Ids of articles merged into this one as duplicates. */
    mergedFrom: z.array(z.string()).default([]),
    mediaCount: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Portfolio entries — hand-authored, not migrated. */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().default(''),
    year: z.union([z.number(), z.string()]),
    status: z.enum(['active', 'shipped', 'archived']).default('shipped'),
    stack: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    cover: z.string().optional(),
    order: z.number().default(999),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Author roster, kept as JSON so it is trivial to update by hand. */
const authors = defineCollection({
  loader: file('./src/data/authors.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    bio: z.string().default(''),
    avatar: z.string().optional(),
    links: z.record(z.string(), z.string()).default({}),
  }),
});

export const collections = { posts, projects, authors };
