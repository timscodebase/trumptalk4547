<script lang="ts">
	import * as config from '$lib/config'
	import { Podcasters, YouTubers } from '$lib'

	const highlighted_video = 'https://www.youtube.com/embed/PsP_xIy7YYA?si=qF2RFgqqBZ42vRof&amp'
</script>

<svelte:head>
	<title>{config.name} | They say it best!</title>
</svelte:head>

<h1>They say it best!</h1>

<iframe
	width="100%"
	height="550px"
	src={highlighted_video}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<h2>YouTubers</h2>
<YouTubers />

<h2>Podcasts</h2>
<Podcasters />
