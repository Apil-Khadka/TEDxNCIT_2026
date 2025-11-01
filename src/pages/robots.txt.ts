import type { APIRoute } from 'astro';

const robotsTxt = `
# Allow all search engines to crawl everything
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${new URL('/sitemap-index.xml', import.meta.env.SITE).href}

# Optional crawl-delay for polite crawling (seconds)
# Crawl-delay: 10
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
