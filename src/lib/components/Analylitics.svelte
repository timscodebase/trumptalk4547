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
