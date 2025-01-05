import type { PageServerLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async ({
	fetch
}: {
	fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>
}) => {
	const limit = 6
	const type = 'economy'

	const response = await fetch(`/api/posts-by-type?limit=${limit}&type=${type}`)
	const posts: Post[] = await response.json()
	return { posts }
}) satisfies PageServerLoad
