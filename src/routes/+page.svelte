<script>
	import { Posts, Sponsors } from '$lib'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<Posts {posts} />
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
