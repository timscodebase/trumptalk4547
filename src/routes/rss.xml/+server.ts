import * as config from '$lib/config'
import type { Post } from '$lib/types'

export async function GET({ fetch }) {
	const response = await fetch('api/all-posts')
	const posts: Post[] = await response.json()

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.url}/blog/${post.slug}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}/blog/${post.slug}</link>
							<image>
								<url>https://res.cloudinary.com/tithos/image/upload/c_scale,q_auto:eco,w_1500/v1735759285/${post.image_id}.avif</url>
								<link>${config.url}/blog/${post.slug}</link>
							</image>
							<guid isPermaLink="true">${config.url}/blog/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
