<script>
	import { BlogLink, ElectionCountDown, Image } from '$lib'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<h2>Blog</h2>

<section>
	<ul class="posts">
		{#each posts as post, i}
			<li class="post" style={`--transition-name: post-${post.slug}`}>
				<BlogLink {post} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;

		li {
			padding: 0;
			margin: 0;
		}
	}

	@media (max-width: 1000px) {
		.posts {
			gap: 0.5rem;
		}
	}
</style>
