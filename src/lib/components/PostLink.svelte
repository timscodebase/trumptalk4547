<script lang="ts">
	import type { Post } from '$lib/types'
	import { Image } from '$lib'
	import { formatDate } from '$lib/utils'
	let { post } = $props() as { post: Post }
</script>

<article>
	<a href={`/blog/${post.slug}`} class="title">
		<img src={post.image} alt={post.title} loading="lazy" />
		<h2>{post.title}</h2>

		<div class="meta">
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
		</div>
	</a>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr;
		height: 100%;
		place-items: center;
		overflow: hidden;
<<<<<<< HEAD
		border: 2px solid var(--color-accent);
=======
		border: 2px solid var(--color-highligh);
>>>>>>> main

		a {
			display: block;
			padding: 0;
			height: 100%;
			background: var(--color-surface-light);

			&:hover {
				text-decoration: none;
			}

			&:visited {
				color: var(--color-text-op);
			}

			h2 {
				display: block;
				margin-top: -7px;
				padding: 0.5rem 5px;
				color: var(--color-text);
<<<<<<< HEAD
				background: var(--color-accent);
				font-size: clamp(1.75rem, 2.75vw, 2.25rem);
=======
				background: var(--color-highligh);
				font-size: clamp(1.75rem, 2.75vw, 2.25rem);
				text-shadow: none;
>>>>>>> main
			}
		}
	}

	p {
		margin: 0;
		padding: 1rem;
	}

	h2 {
		margin: 0;
		padding: 10px 0;
		text-align: center;
		background: rgba(15, 5, 128, 0.5);
	}

	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
	}

	.meta {
		color: var(--color-post-meta);

		.date {
			font-weight: bold;
			padding-bottom: 0;
		}
	}
</style>
