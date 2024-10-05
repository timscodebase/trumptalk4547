<svelte:options runes={true} />

<script lang="ts">
	import { formatDate, slugify } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()
	const { content, metadata: meta } = data
</script>

<svelte:head>
	<title>{config.name} | {meta.title}</title>
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />

	<meta name="twitter:creator" content="@TrumpTalk4547" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@TrumpTalk4547" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={meta.image} />
	<meta name="twitter:url" content={`${config.url}/blog/${meta.slug}`} />
</svelte:head>

<article>
	<hgroup>
		<h1 style={`--transition-name: post-${slugify(meta.title)}`}>{meta.title}</h1>
		<p class="date">Published at {formatDate(meta.date)}</p>

		<div class="tags">
			{#each meta.categories as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>
	</hgroup>

	<div class="prose">
		{@render content()}
	</div>
</article>

<style>
	article {
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

	.date,
	.tags {
		font-family: var(--font-mono);
	}

	.date {
		margin: 0;
		padding: 0;
	}

	.tags {
		display: flex;
		gap: 5px;
		padding-bottom: 1rem;
	}

	@media (max-width: 1000px) {
		.tags {
			flex-wrap: wrap;
		}
	}
</style>
