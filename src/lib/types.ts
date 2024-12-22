enum ArticleType {
    News = "news",
    Opinion = "opinion",
    Feature = "feature",
    Review = "review",
    Interview = "interview",
    Editorial = "editorial",
    Analysis = "analysis"
}

export interface Post {
	title: string
	slug: string
	description: string
	date: string
	image: string
	type: ArticleType
	categories: [string]
	published: boolean
	featured: boolean
	author: string
	avatar: string
}

export type Image = {
	src: string
	alt: string
}
