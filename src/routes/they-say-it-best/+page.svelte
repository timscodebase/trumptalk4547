<script lang="ts">
	import * as config from '$lib/config'
	import { Podcasters, YouTubers } from '$lib'
</script>

<svelte:head>
	<title>{config.name} | They say it best!</title>
</svelte:head>

<h1>They say it best!</h1>

<h2>YouTubers</h2>
<YouTubers />

<h2>Podcasts</h2>
<Podcasters />
