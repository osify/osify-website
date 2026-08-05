import type { APIRoute } from 'astro';
import { allPosts } from '../lib/posts';
import { slugifyTerm } from '../lib/site';

/** Strip Markdown to plain text for indexing. */
function plain(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/[*_~>#]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET: APIRoute = async () => {
  const posts = await allPosts();

  const docs = posts.map((post) => ({
    s: post.id,
    t: post.data.title,
    e: post.data.excerpt,
    d: post.data.date.toISOString().slice(0, 10),
    a: post.data.author,
    o: post.data.origin.site,
    l: post.data.lang,
    c: post.data.categories.map((name) => ({ n: name, s: slugifyTerm(name) })),
    g: post.data.tags,
    // Enough body text to make search useful without shipping the whole archive.
    b: plain(post.body ?? '').slice(0, 900),
  }));

  return new Response(JSON.stringify(docs), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};
