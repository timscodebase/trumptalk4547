<script lang="ts">
	import { formatDate, slugify } from '$lib/utils'
	import { OG } from '$lib'

	let { data } = $props()
	const { content, metadata: meta } = data
</script>

<svelte:head>
	<OG {meta} />
</svelte:head>

<article>
	<header>
		<h1 style={`--transition-name: post-${slugify(meta.title)}`}>
			{meta.title}
		</h1>
	</header>
	<section class="content">
		{@render content()}
	</section>

	<footer>
		<section class="by_line">
			<img src={meta.avatar} alt="{meta.author} avatar" />
			<p>By {meta.author}</p>
			<p class="date">Published at {formatDate(meta.date)}</p>
		</section>

		<div class="tags">
			{#each meta.categories as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>
	</footer>
</article>

<style>
	article {
		margin-inline: auto;
	}

	.content {
		font-size: 24px;
		content-visibility: auto;
		contain-intrinsic-size: 1000px; /* Explained in the next section. */
	}

	h1 {
		text-transform: capitalize;
	}

	.by_line,
	.date,
	.tags {
		font-family: var(--font-mono);
	}

	.by_line {
		display: flex;
		place-items: center;
		gap: 0 1rem;
		padding: 1rem 0;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1rem;
		padding-bottom: 1rem;
	}

	@media (max-width: 1000px) {
		.tags {
			flex-wrap: wrap;
		}
	}
</style>
