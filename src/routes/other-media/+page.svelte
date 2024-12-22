<script lang="ts">
	import * as config from '$lib/config'
	import { Podcasters, YouTubers } from '$lib'

	const highlighted_video = 'https://www.youtube.com/embed/PsP_xIy7YYA?si=qF2RFgqqBZ42vRof&amp'
</script>

<svelte:head>
	<title>{config.name} | They say it best!</title>
</svelte:head>

<h1>They say it best!</h1>

<h2>YouTubers</h2>
<YouTubers />

<h2>Podcasts</h2>
<Podcasters />
