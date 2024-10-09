import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }: { params: { slug: string } }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`)
		const { default: content, metadata } = post

		return {
			content,
			metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}) satisfies PageLoad
