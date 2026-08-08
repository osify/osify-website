import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allPosts } from '../lib/posts';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await allPosts();

  return rss({
    title: `${SITE.title} — ${SITE.tagline}`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.slice(0, 50).map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/posts/${post.id}/`,
      author: post.data.author,
      categories: [...post.data.categories, ...post.data.tags],
    })),
    // Feed readers and scrapers both see the terms; excerpts only, so a full
    // article is never handed over in a form that invites reposting.
    customData: `<language>en</language><copyright>© 2008-${new Date().getFullYear()} OSIFY. Licensed CC BY-NC-ND 4.0.</copyright>`,
  });
}
