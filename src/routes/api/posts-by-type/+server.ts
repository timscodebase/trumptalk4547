import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts(limit: number, type: string): Promise<Post[]> {
	let posts: Post[] = []

	console.log('Limit: ', limit)
	console.log('Type: ', type)
	
	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.published && post.type === type && posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	posts = posts.slice(0, limit)
	console.log('Posts: ', posts)

	return posts
}

export async function GET(event: { url: URL }) {
	const limit = event.url.searchParams.get('limit') || '6';
	const type = event.url.searchParams.get('type') || 'feature';

	console.log('Limit: ', limit)
	console.log('Type: ', type)

	const posts = await getPosts(parseInt(limit), type);
	return json(posts);
}