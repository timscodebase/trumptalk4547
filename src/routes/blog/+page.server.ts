import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async ({ fetch }) => {
	const response = await fetch('api/featured-posts')
	const posts: Post[] = await response.json()
	return { posts }
}) satisfies PageServerLoad
