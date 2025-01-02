<script lang="ts">
	import { formatDate, slugify } from '$lib/utils'
	import { CldImage, CldOgImage } from 'svelte-cloudinary'
	import { OG } from '$lib'

	let { data } = $props()
	const { content, metadata: meta } = data
</script>

<svelte:head>
	<OG {meta} />
</svelte:head>

<CldOgImage
	src={meta.image_id}
	alt={meta.title}
	twitterTitle={meta.title}
	width={960}
	height={600}
/>

<article>
	<header>
		<h1 style={`--transition-name: post-${slugify(meta.title)}`}>
			{meta.title}
		</h1>
	</header>
	
	<!-- <CldImage
		width="1500"
		height="1125"
		src="nihilism-01"
		alt=”Nihilism and Faith in the United States”
	/> -->

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

	.content {
		font-size: 24px;
		content-visibility: auto;
		contain-intrinsic-size: 1000px;
		padding: 1rem;
		margin-inline: auto;
		background: var(--color-surface-darker);
	}

	h1 {
		text-transform: capitalize;
	}

	.by_line,
	.date,
	.tags {
		padding: 1rem;
		font-family: var(--font-mono);
		background: var(--color-surface-darker);
	}

	.by_line {
		display: flex;
		place-items: center;
		gap: 0 1rem;
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
