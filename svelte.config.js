import { join } from 'path';
import { getHighlighter } from 'shiki'
import { mdsvex, escapeSvelte } from 'mdsvex'
import adapter from '@sveltejs/adapter-vercel'
import { partytownVite } from '@builder.io/partytown/utils'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript']
			})
			await highlighter.loadLanguage('javascript', 'typescript')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
			return `{@html \`${html}\` }`
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],,
	partytownVite({
		dest: join(__dirname, 'static', '~partytown'),
	}),
	kit: {
		adapter: adapter(),
		prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        // Handle the error based on status code or other parameters
        if (status === 500) {
          console.error(`Error 500 encountered at ${path}`);
          return { status: 200, body: 'Custom error message or handling logic' };
        }
      }
    }
	}
}

export default config
