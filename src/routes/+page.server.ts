import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async ({ fetch }) => {
	const response = await fetch('api/featured-posts')
	const posts: Post[] = await response.json()
	const featuredPosts: Post[] = posts.filter((post) => post.featured)

	return { posts: featuredPosts }
}) satisfies PageServerLoad
