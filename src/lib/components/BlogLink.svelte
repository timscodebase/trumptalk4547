<svelte:options runes={true} />

<script lang="ts">
	import { Image, Side_By_Side } from '$lib'
	import { formatDate } from '$lib/utils'

	type Props = {
		post: {
			slug: string
			title: string
			description: string
			date: string
			image: string
		}
	}
	let { post } = $props() as Props
</script>

<Side_By_Side>
	<div>
		<a href={`/blog/${post.slug}`} class="title">
			<img src={post.image} alt={post.title} loading="lazy" />
			<h2>{post.title}</h2>

			<div class="meta">
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</div>
		</a>
	</div>
</Side_By_Side>

<style>
	a {
		display: block;
		padding: 0;
		background: var(--color-text);

		&:hover {
			text-decoration: none;
		}

		&:visited {
			color: var(--color-text-op);
		}

		h2 {
			display: block;
			font-size: clamp(0.9rem, 3vw, 2.5rem);
			padding: 0.5rem 5px;
			color: var(--color-accent);
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
	}
	.meta {
		color: var(--color-text);
	}

	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
	}

	@media (max-width: 1000px) {
		a {
			display: grid;
			place-content: center;
			padding-bottom: 0;

			h2 {
				display: inline-block;
				width: 100%;
				overflow-wrap: break-word;
				text-align: center;
				padding-bottom: 16px;
				margin-bottom: 0;
			}
		}

		p {
			font-size: 0.75rem;
			padding: 0.2rem 0.5rem;
		}
	}

	.meta {
		color: var(--color-text-op);
		background: var(--color-surface-op);

		.date {
			font-weight: bold;
			padding-bottom: 0;
		}
	}
</style>
