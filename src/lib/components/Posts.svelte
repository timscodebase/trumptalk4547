<script lang="ts">
	import type { Post } from '$lib/types'
	import BlogLink from './BlogLink.svelte'

	const { posts } = $props() as { posts: Post[] }
</script>

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
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
