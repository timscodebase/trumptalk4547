<script lang="ts">
	import { slugify } from '$lib/utils'
	import * as config from '$lib/config'
	import { CldOgImage } from 'svelte-cloudinary'

	let { meta } = $props()
	console.log('META: ', meta.image_id)
</script>

<meta name="title" property="og:title" content={meta.title} />
<meta name="description" property="og:description" content={meta.description} />
<meta name="author" content={meta.author} />
<meta property="og:locale" content="en_US" />
<meta property="article:publisher" content={config.url} />
<meta property="article:author" content={meta.author} />
<meta property="article:section" content="Blog" />

{#each meta.categories as item}
	<meta property="article:tag" content={item} />
{/each}

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content={config.name} />
<meta name="twitter:creator" content="@trumptalk4547" />
<meta name="twitter:title" content={meta.title} />
<meta name="twitter:description" content={meta.description} />
<meta name="twitter:image" content={meta.image} />
<meta name="twitter:image:alt" content={meta.title} />
