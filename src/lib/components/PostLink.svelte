<script lang="ts">
	import type { Post } from '$lib/types'
	import { CldImage } from 'svelte-cloudinary';
	import Image from './Image.svelte'
	import { formatDate } from '$lib/utils'
	let { post } = $props() as { post: Post }
	const { date, description, image_id, slug, title } = post
</script>

<article>
	<a href={`/blog/${slug}`} class="title">
		<CldImage
			width="100%"
			src={image_id}
			alt={title}
		/>
		<h2>{title}</h2>

		<div class="meta">
			<p class="date">{formatDate(date)}</p>
			<p class="description">{description}</p>
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
		border: 2px solid var(--color-highligh);

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
				background: var(--color-highligh);
				font-size: clamp(1.75rem, 2.75vw, 2.25rem);
				text-shadow: none;
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

	.meta {
		color: var(--color-post-meta);

		.date {
			font-weight: bold;
			padding-bottom: 0;
		}
	}
</style>
