import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'


export const load = (async ({ fetch, url }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>, url: URL }) => {
	const limitStr = url.searchParams.get('limit');
	const limit = limitStr ? parseInt(limitStr) : 6; // default to 5 if 'limit' is not provided or is not a number
	const response = await fetch(`/api/all-posts`)
	const posts: Post[] = await response.json()
	return { posts }
}) satisfies PageServerLoad
