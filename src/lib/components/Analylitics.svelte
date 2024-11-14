<script lang="ts">
	import { page } from '$app/stores'
	import { dev } from '$app/environment'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	injectAnalytics({ mode: dev ? 'development' : 'production' })

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-FZH87M6DDV', {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	})
</script>
