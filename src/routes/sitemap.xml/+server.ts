import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  setHeaders({
		'Content-Type': 'application/xml'
	});

	const response = await fetch('/api/posts');

	function create_entry(path, lastmod) {
	return `<url>
    <loc>${new URL(path, PUBLIC_CANONICAL_ORIGIN).href}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
}

	if (!response.ok) {
		throw error(500, 'Failed to fetch posts.');
	}

	const raw_posts = await response.json();

	const posts = raw_posts.map((post: { path: string; lastmod: string }) => create_entry(post.path, post.lastmod));

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts.join('\n')}
</urlset>`;

	return new Response(sitemap);
};