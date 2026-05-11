import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const sorted = posts.sort(
    (a, b) => b.data.published_at.getTime() - a.data.published_at.getTime()
  );

  return rss({
    title: 'LinAI — AI Intelligence',
    description: 'AI intelligence through every lens. Research-grade sourcing, no hype.',
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published_at,
      description: post.data.description,
      link: `/${post.data.slug}/`,
      categories: [post.data.category, ...post.data.pestle],
    })),
    customData: `<language>en-gb</language>`,
  });
}
