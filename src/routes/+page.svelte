<script>
	import { ElectionCountDown, Image, Posts, Sponsors } from '$lib'
	import { CldImage, CldOgImage } from 'svelte-cloudinary'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<CldOgImage
	src="tt4547_for_sale_klekm4"
	alt="TrumpTalk4547.com id For Sale!"
	twitterTitle="TrumpTalk4547.com id For Sale!"
	width={960}
	height={600}
/>

<ElectionCountDown />

<section>
	<Posts {posts} />
</section>

<a class="more-articles" href="/blog">More articles &rarr;</a>

<Sponsors />

<style>
	.more-articles {
		display: block;
		color: var(--color-text);
		padding-top: 1.5rem;
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}
</style>
