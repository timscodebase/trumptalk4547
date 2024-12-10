<script>
	import Posts from '$lib/components/Posts.svelte'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<h1>Blog</h1>

<Posts {posts} />
