import * as config from '$lib/config'
import type { Post } from '$lib/types'
import { CldImage } from 'svelte-cloudinary';

export async function GET({ fetch }) {
	const response = await fetch('api/all-posts')
	const posts: Post[] = await response.json()
	console.log("Post from RSS: ", posts)

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.name}</title>
				<description>${config.description}</description>
				<link>/blog/${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}/${post.slug}</link>
							<image>
								<url>${post.image}</url>
								<CldImage
										width='100%'
										src={post.image_id}
										alt={post.title}
										aspect-ratio='16:9'
									/>
								<link>${config.url}/${post.slug}</link>
							</image>
							<guid isPermaLink="true">${config.url}/${post.slug}</guid>
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
