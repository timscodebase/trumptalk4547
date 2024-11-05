<script lang="ts">
	import { Utterances } from '@codewithshin/svelte-utterances'
	import { formatDate, slugify } from '$lib/utils'
	import * as config from '$lib/config'
	import Partytown from 'partytown-sveltekit/Partytown.svelte'

	let { data } = $props()
	const { content, metadata: meta } = data
</script>

<svelte:head>
	<title>{config.name} | {meta.title}</title>

	<meta name="robots" content="index, follow" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content={config.name} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:url" content={`${config.url}/blog/${slugify(meta.title)}`} />
	<meta property="og:type" content="article" />

	<meta name="twitter:creator" content="@TrumpTalk4547" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@TrumpTalk4547" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={meta.image} />
	<meta name="twitter:url" content={`${config.url}/blog/${slugify(meta.title)}`} />
</svelte:head>

<article>
	<hgroup>
		<h1 style={`--transition-name: post-${slugify(meta.title)}`}>{meta.title}</h1>
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
	</hgroup>

	<section class="content">
		{@render content()}
		<Utterances
			reponame="timscodebase/trumptalk4547"
			issue-term="pathname"
			theme="dark-blue"
			crossorigin="anonymous"
			async
		/>
	</section>
</article>

<style>
	article {
		margin-inline: auto;
	}

	.content {
		content-visibility: auto;
		contain-intrinsic-size: 1000px; /* Explained in the next section. */
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text);
		opacity: 0.7;
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
