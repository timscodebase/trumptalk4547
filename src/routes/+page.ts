import type { PageLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async ({ fetch }) => {
  const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	const featuredPosts: Post[] = posts.filter((post) => post.featured)

	console.log("All Posts", posts)
	console.log("Featured Posts", featuredPosts)

	return { posts: featuredPosts }
}) satisfies PageLoad;