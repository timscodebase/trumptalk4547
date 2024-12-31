import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'

<<<<<<< HEAD
export const load = (async ({ fetch, url }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>, url: URL }) => {
	const limitStr = url.searchParams.get('limit');
	const limit = limitStr ? parseInt(limitStr) : 4;
	
	const response = await fetch(`/api/featured-posts?limit=${limit}`)
	
	const posts: Post[] = await response.json()

=======
export const load = (async ({ fetch }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response> }) => {
	const limit = 8;
	const type = "featured";

	const response = await fetch(`/api/posts-by-type?limit=${limit}&type=${type}`);
	const posts: Post[] = await response.json()
>>>>>>> main
	return { posts }
}) satisfies PageServerLoad

