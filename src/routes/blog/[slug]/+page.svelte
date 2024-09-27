<script lang="ts">
	import { formatDate, slugify } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()
	const { meta, content } = data
</script>

<!-- SEO -->
<svelte:head>
	<title>{config.name} | {meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1 style={`--transition-name: post-${slugify(meta.title)}`}>{meta.title}</h1>
		<p>Published at {formatDate(meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={content} />
	</div>
</article>

<style>
	article {
		/* max-inline-size: var(--size-content-3); */
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text);
		opacity: 0.7;
	}

	.tags {
		display: flex;
		gap: 5px;
	}
</style>
