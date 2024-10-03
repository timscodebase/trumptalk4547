<svelte:options runes={true} />

<script lang="ts">
	import 'iconify-icon'
	import { Analylitics, CookieConsent, Footer, Header } from '$lib'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

	injectSpeedInsights()

	let { children } = $props()

	// set root variables
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
		{@render children()}
	</main>
	<Footer />
</div>

<CookieConsent />

<style>
	.wrapper {
		max-width: 1000px;
		margin-inline: auto;
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
