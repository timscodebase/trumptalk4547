import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async ({ fetch, url }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>, url: URL }) => {
	const limitStr = url.searchParams.get('limit');
	const limit = limitStr ? parseInt(limitStr) : 4;
	
	const response = await fetch(`/api/featured-posts?limit=${limit}`)
	
	const posts: Post[] = await response.json()

	return { posts }
}) satisfies PageServerLoad

