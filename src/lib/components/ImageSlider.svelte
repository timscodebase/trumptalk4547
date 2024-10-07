<svelte:options runes={true} />

<script lang="ts">
	import type { Image } from '$lib/types'

	type Props = {
		images: Image[]
		text?: string
	}

	let { images, text = '' } = $props() as Props
</script>

<section id="sectionPin">
	<div class="pin-wrap-sticky">
		<div class="pin-wrap">
			<p class="imageText">{text}</p>
			{#each images as { src, alt }}
				<img {src} {alt} />
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes move {
		to {
			/* Move horizontally so that right edge is aligned against the viewport */
			transform: translateX(calc(-100% + 100vw));
		}
	}

	#sectionPin {
		/* Stretch it out, so that we create room for the horizontal scroll animation */
		height: 500vh;
		overflow: visible; /* To make position sticky work … */

		view-timeline-name: --section-pin-tl;
		view-timeline-axis: block;
	}

	.pin-wrap-sticky {
		/* Stick to Top */
		height: 100vh;
		width: 100vw;
		position: sticky;
		top: 0;

		width: 100vw;
		overflow-x: hidden;
	}

	.pin-wrap {
		display: flex;
		align-items: center;
		height: 100vh;
		width: fit-content;

		/* Hook animation */
		will-change: transform;
		animation: linear move forwards;

		/* Link animation to view-timeline */
		animation-timeline: --section-pin-tl;
		animation-range: contain 0% contain 100%;
	}

	p {
		text-align: center;
	}

	img {
		height: 100%;
		width: auto;
		object-fit: contain;
		scroll-snap-align: center;
		scroll-snap-align: start;
	}

	@media (max-width: 1000px) {
		#sectionPin {
			width: 100% !important;
			height: fit-content !important;
			overflow: visible !important;
		}
		img {
			max-width: 100% !important;
			height: auto !important;
		}

		.pin-wrap-sticky {
			position: relative;
		}

		.pin-wrap {
			flex-direction: column;
		}
	}
</style>
