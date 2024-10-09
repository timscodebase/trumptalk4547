<script lang="ts">
	import { page } from '$app/stores'
	import Partytown from 'partytown-sveltekit/Partytown.svelte'

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-FZH87M6DDV', {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	})
</script>

<Partytown
	script={`
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145750142271743"
     crossorigin="anonymous" ✂prettier:content✂="" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>
<meta name="google-adsense-account" content="ca-pub-2145750142271743" />
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145750142271743"
     crossorigin="anonymous" ✂prettier:content✂="" ✂prettier:content✂="e30=">{}</script>
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

	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145750142271743"
     crossorigin="anonymous" ✂prettier:content✂="">{}</script>
<!-- Test 1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2145750142271743"
     data-ad-slot="4387845955"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`}
></Partytown>
