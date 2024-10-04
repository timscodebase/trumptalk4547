<script lang="ts">
	import { page } from '$app/stores'

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-FZH87M6DDV', {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	})
</script>

<svelte:head>
	<meta name="google-adsense-account" content="ca-pub-2145750142271743" />
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145750142271743"
		crossorigin="anonymous"
	>
	</script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-FZH87M6DDV">
	</script>
	<script>
		window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', 'G-FZH87M6DDV')
	</script>
</svelte:head>
