export type Categories = 'sveltekit' | 'svelte'
export type Post = {
	title: string
	slug: string
	description: string
	date: string
	image: string
	categories: Categories[]
	published: boolean
	featured: boolean
	author: string
	avatar: string
}

export type Image = {
	src: string
	alt: string
}
