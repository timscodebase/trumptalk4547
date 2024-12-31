enum ArticleType {
    News = "news",
<<<<<<< HEAD
    Opinion = "opinion",
    Feature = "feature",
    Review = "review",
    Interview = "interview",
    Editorial = "editorial",
    Analysis = "analysis"
=======
		Domestic = "domestic",
		Foriegn = "foriegn",
		Economy = "economy",
    Opinion = "opinion",
		Health = "health",
    Featured = "featured",
    Interview = "interview",
    Editorial = "editorial"
>>>>>>> main
}

export interface Post {
	title: string
<<<<<<< HEAD
	slug: string
	description: string
	date: string
	image: string
	type: ArticleType
	categories: [string]
	published: boolean
	featured: boolean
=======
	description: string
	date: string
	image: string
	categories: [string]
	published: boolean
	type: [ArticleType]
>>>>>>> main
	author: string
	avatar: string
}

export type Image = {
	src: string
	alt: string
}
