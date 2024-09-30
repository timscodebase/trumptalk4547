import { dev } from '$app/environment'

export const url = dev ? 'http://localhost:5713' : 'trumptalk4547.com'

export const name = 'Trump Talk 45/47'
export const description = 'President Trump\'s 47th News, Analysis, and Speeches'
export const author = 'Tim Smith <gonad2019@gmail.com>'
export const keywords = ['svelte', 'kit', 'sveltekit', 'site', 'template']
export const nav_links = [
	{ url: '/', text: 'Home' },
	{ url: '/about', text: 'About' },
	{ url: '/blog', text: 'Blog' },
	{ url: '/contact', text: 'Contact' }
]
