enum ArticleType {
    News = "news",
		Domestic = "domestic",
		Foriegn = "foriegn",
		Economy = "economy",
    Opinion = "opinion",
		Health = "health",
    Featured = "featured",
    Interview = "interview",
    Editorial = "editorial"
}

export interface Post {
	title: string
	description: string
	date: string
	image?: Image
	image_id?: string
	categories: [string]
	published: boolean
	type: [ArticleType]
	author: string
	avatar: string
}

export type Image = {
	src: string
	alt: string
}
