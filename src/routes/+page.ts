import type { PageLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async ({ fetch }) => {
  const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	const featuredPosts: Post[] = posts.filter((post) => post.featured)

	return { posts: featuredPosts }
}) satisfies PageLoad;