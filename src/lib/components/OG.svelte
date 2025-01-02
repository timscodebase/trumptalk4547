<script lang="ts">
	import { slugify } from '$lib/utils'
	import * as config from '$lib/config'
	import { CldOgImage } from 'svelte-cloudinary'

	let { meta } = $props()
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

<CldOgImage
  src={meta.image_id}
  alt={meta.title}
  twitterTitle={meta.title}
  width={960}
  height={600}
  blur="500"
  overlays={[
    {
      crop: "fit",
      width: "1000",
      text: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: "180",
        fontWeight: "bold",
        lineSpacing: "-85",
        text: meta.title,
      }
    },
  ]}
/>

<!-- <meta name="image" property="og:image" content={meta.image} />
<meta property="og:image:secure_url" content={meta.image} />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content={meta.title} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Trump Talk 45/47" />
<meta property="og:type" content="article" />
<meta property="og:url" content={`${config.url}/blog/${slugify(meta.title)}`} /> 

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content={config.name} />
<meta name="twitter:creator" content="@trumptalk4547" />
<meta name="twitter:title" content={meta.title} />
<meta name="twitter:description" content={meta.description} />
<meta name="twitter:image" content={meta.image} />
<meta name="twitter:image:alt" content={meta.title} /> -->
