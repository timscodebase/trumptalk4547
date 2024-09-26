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
	{#each images as image, i}
		<img
			src={image.src}
			class:active={i === currentIndex}
			class:inactive={i !== currentIndex}
			alt={image.alt}
		/>
	{/each}

	<div class="controls">
		<button onclick={previousImage}>&lt;</button>
		<button onclick={nextImage}>&gt;</button>
	</div>
</div>

<style>
	.image-slider {
		overflow-x: scroll;
		scroll-snap-type: mandatory;
		scroll-snap-stop: always;
		scroll-snap-align: center;
		display: flex;
		gap: 5px;
	}
</style>
