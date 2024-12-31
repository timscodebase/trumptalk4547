<script>
	import { Image, Posts, Sponsors } from '$lib'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name} | Health</title>
</svelte:head>

<h1>Health</h1>

<section>
	{#if posts.length === 0}
		<p>No Health articles yet.  Pleaase check back soon</p>
	{:else}
		<Posts {posts} />
	{/if}
</section>

<a class="more-articles" href="/blog">More articles &rarr;</a>

<Sponsors />

<style>
	.more-articles {
		display: block;
		color: var(--color-text);
		padding-top: 1.5rem;
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}
</style>
