<script lang="ts">
	import type { Image } from '$lib/types'

	type Props = {
		images: Image[]
		autoplay?: boolean
		interval?: number
	}

	let { images, interval = 3000 } = $props() as Props
	let currentIndex = $state(0)
	let intervalId: NodeJS.Timeout | null = null

	$effect(() => {
		intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length
		}, interval)

		return () => {
			if (intervalId) clearInterval(intervalId)
		}
	})

	function previousImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length
	}
</script>

<div class="image-slider">
	{#each images as { src, alt }}
		<img {src} {alt} />
	{/each}
</div>
<p>Swipe left for more images</p>

<style>
	.image-slider {
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		display: flex;
		gap: 5px;
		background: var(--color-surface-op);
	}

	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
		scroll-snap-align: center;
		scroll-snap-align: start;
	}
</style>
