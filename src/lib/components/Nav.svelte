<svelte:options runes={true} />

<script>
	import { page } from '$app/stores'
	let links = $props()
</script>

<nav>
	<ul>
		{#each links.links as { url, text }}
			<li><a href={url} class:active={$page.url.pathname === url}>{text}</a></li>
		{/each}
	</ul>
</nav>

<style>
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
