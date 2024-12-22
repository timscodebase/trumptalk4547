<script lang="ts">
	import 'iconify-icon'
	import { inject } from '@vercel/analytics'
	import { Analylitics, CookieConsent, Footer, ForSaleBanner, Header, Nav } from '$lib'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
	import PartytownSnippet from 'partytown-sveltekit/PartytownSnippet.svelte'
	let { children } = $props()

	injectSpeedInsights() // Inject Vercel Insights

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

<PartytownSnippet />

<style>
	.wrapper {
		max-width: 1200px;
		margin-inline: auto;
	}

	@media (max-width: 1200px) {
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
