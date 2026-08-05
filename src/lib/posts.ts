import { getCollection, type CollectionEntry } from 'astro:content';
import { slugifyTerm } from './site';

export type Post = CollectionEntry<'posts'>;

/** Newest first — the order the archive has always been read in. */
export async function allPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export type TermCount = { name: string; slug: string; count: number };

function tally(posts: Post[], field: 'tags' | 'categories'): TermCount[] {
  const counts = new Map<string, TermCount>();
  for (const post of posts) {
    for (const raw of post.data[field]) {
      const name = raw.trim();
      if (!name) continue;
      const slug = slugifyTerm(name);
      if (!slug) continue;
      const existing = counts.get(slug);
      if (existing) existing.count++;
      else counts.set(slug, { name, slug, count: 1 });
    }
  }
  return [...counts.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const tagCounts = (posts: Post[]) => tally(posts, 'tags');
export const categoryCounts = (posts: Post[]) => tally(posts, 'categories');

export function postsWithTerm(posts: Post[], field: 'tags' | 'categories', slug: string): Post[] {
  return posts.filter((post) => post.data[field].some((term) => slugifyTerm(term) === slug));
}

export type YearGroup = { year: number; posts: Post[] };

export function groupByYear(posts: Post[]): YearGroup[] {
  const groups = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getUTCFullYear();
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year)!.push(post);
  }
  return [...groups.entries()]
    .map(([year, entries]) => ({ year, posts: entries }))
    .sort((a, b) => b.year - a.year);
}

export function authorCounts(posts: Post[]): TermCount[] {
  const counts = new Map<string, TermCount>();
  for (const post of posts) {
    const name = post.data.author;
    const slug = slugifyTerm(name);
    const existing = counts.get(slug);
    if (existing) existing.count++;
    else counts.set(slug, { name, slug, count: 1 });
  }
  return [...counts.values()].sort((a, b) => b.count - a.count);
}

/**
 * Related articles, scored by shared tags then shared categories. Purely
 * content-derived — the archive has no hand-curated relationships.
 */
export function relatedPosts(posts: Post[], target: Post, limit = 3): Post[] {
  const tags = new Set(target.data.tags.map(slugifyTerm));
  const categories = new Set(target.data.categories.map(slugifyTerm));

  return posts
    .filter((post) => post.id !== target.id)
    .map((post) => {
      let score = 0;
      for (const tag of post.data.tags) if (tags.has(slugifyTerm(tag))) score += 2;
      for (const category of post.data.categories) if (categories.has(slugifyTerm(category))) score += 3;
      return { post, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.date.getTime() - a.post.data.date.getTime())
    .slice(0, limit)
    .map((entry) => entry.post);
}
