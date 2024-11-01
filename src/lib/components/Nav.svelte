<svelte:options runes={true} />

<script>
	import { page } from '$app/stores'

	let isMenuOpen = $state(false)
	let links = $props()

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
		console.log('Menu Toggle Clicked:', isMenuOpen)
	}
</script>

<button aria-label="Menu Toggle" onclick={toggleMenu}>
	<iconify-icon
		icon={`line-md:${isMenuOpen ? 'menu-to-close-transition' : 'close-to-menu-transition'}`}
	></iconify-icon>
</button>

<div class="nav-draw" class:open={isMenuOpen}>
	<nav>
		<ul>
			{#each links.links as { url, text }}
				<li><a href={url} class:active={$page.url.pathname === url}>{text}</a></li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.nav-draw {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-background);
		z-index: 100;
		transform: translateX(100%);
		transition: transform 300ms;
		will-change: transform;

		&.open {
			transform: translateX(0);
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1rem;
	}

	@media (max-width: 1000px) {
		nav {
			margin: 5px auto 0 auto;
			font-size: 1.25rem;
		}
	}

	:global(.active) {
		text-decoration: underline;
		text-decoration-color: var(--color-accent);
		text-decoration-thickness: 3px;
	}
</style>
