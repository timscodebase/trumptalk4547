<script lang="ts">
	import { Image, Side_By_Side } from '$lib'
	import { formatDate } from '$lib/utils'

	type Props = {
		odd?: boolean
		post: {
			slug: string
			title: string
			description: string
			date: string
			image: string
		}
	}
	let { odd = true, post } = $props() as Props
</script>

{#if odd}
	<Side_By_Side>
		<div>
			<a href={`/blog/${post.slug}`} class="title">
				<h2>{post.title}</h2>
			</a>
			<div class="meta">
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</div>
		</div>
		<Image src={post.image} alt={post.title} />
	</Side_By_Side>
{:else}
	<Side_By_Side>
		<Image src={post.image} alt={post.title} />
		<div>
			<a href={`/blog/${post.slug}`} class="title">
				<h2>{post.title}</h2>
			</a>
			<div class="meta">
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</div>
		</div>
	</Side_By_Side>
{/if}

<style>
	a {
		display: block;
		padding: 1rem 0 0 1rem;
		background: var(--color-text);
	}

	@media (max-width: 1000px) {
		a {
			display: grid;
			place-content: center;
			padding: 1rem;
			padding-bottom: 0;

			h2 {
				display: inline-block;
				width: 100%;
				font-size: 1.3rem;
				overflow-wrap: break-word;
				text-align: center;
				padding-bottom: 16px;
				margin-bottom: 0;
			}
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
