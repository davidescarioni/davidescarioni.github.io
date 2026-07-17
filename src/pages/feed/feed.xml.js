// src/pages/feed/feed.xml.js
import rss from '@astrojs/rss';

export async function GET(context) {
  const allPosts = Object.values(
    import.meta.glob('../blog/*.md', { eager: true })
  );

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
  );

  const items = sortedPosts.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description ?? undefined,
    pubDate: new Date(post.frontmatter.date),
    link: post.url,
  }));

  return rss({
    title: 'Scario Side Quest',
    description: 'My personal blog.',
    site: context.site,
    items,
    customData: `<language>it</language><atom:link href="${context.site}feed/feed.xml" rel="self" type="application/rss+xml"/>`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}