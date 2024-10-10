<svelte:options runes={true} />

<script>
	import { ElectionCountDown, Image, Posts } from '$lib'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<h2>Blog</h2>

<Posts {posts} />
