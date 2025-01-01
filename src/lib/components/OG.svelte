<script lang="ts">
	import { slugify } from '$lib/utils'
	import * as config from '$lib/config'

	let { meta } = $props()
</script>

<meta name="title" property="og:title" content={meta.title} />
<meta name="description" property="og:description" content={meta.description} />
<meta name="author" content={meta.author} />

<meta name="image" property="og:image" content={meta.image} />
<meta property="og:image:secure_url" content={meta.image} />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content={meta.title} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Trump Talk 45/47" />
<meta property="og:type" content="article" />
<meta property="og:url" content={`${config.url}/blog/${slugify(meta.title)}`} />

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
