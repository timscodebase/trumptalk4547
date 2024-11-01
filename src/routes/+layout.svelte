<script lang="ts">
	import 'iconify-icon'
	import { Analylitics, CookieConsent, Footer, Header } from '$lib'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
	import { inject } from '@vercel/analytics'
	import PartytownSnippet from 'partytown-sveltekit/PartytownSnippet.svelte'

	injectSpeedInsights()

	let { children } = $props()
	$effect(() => {
		const root = document.documentElement || document.body

		window.addEventListener('pagereveal', async (e) => {
			if (e.viewTransition) {
				const transitionType = determineTransitionType(
					navigation.activation.from,
					navigation.activation.entry
				)
				e.viewTransition.types.add(transitionType)
			}
		})
	})
</script>

<Analylitics />

<div class="wrapper">
	<Header />
	<main>
		<video autoplay muted loop>
			<source
				src="https://res.cloudinary.com/tithos/video/upload/e_vibrance:20,f_auto,q_auto:eco/v1728514925/flag-bg-3_gvjtlm.mp4"
				type="video/mp4"
			/>
		</video>
		{@render children()}
	</main>
	<Footer />
</div>

<CookieConsent />

<PartytownSnippet />

<style>
	.wrapper {
		max-width: 1000px;
		margin-inline: auto;
	}

	video {
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100%;
		min-height: 100%;
		background-size: cover;
		opacity: 0.08;
		z-index: -1;
	}

	@media (max-width: 1000px) {
		.wrapper {
			padding-inline: 1rem;
		}
	}

	:global(:where(p)) {
		padding: 0.5rem 0;
		line-height: 1.75;
		max-inline-size: 100%;
	}
</style>
