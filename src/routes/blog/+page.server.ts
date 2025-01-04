import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'
export const prerender = true


export const load = (async ({ fetch }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response> }) => {
	const response = await fetch(`/api/all-posts`)
	const posts: Post[] = await response.json()
	return { posts }
}) satisfies PageServerLoad
