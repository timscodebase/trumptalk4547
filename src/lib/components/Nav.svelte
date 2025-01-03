<script lang="ts">
	import { page } from '$app/stores'

	let open = $state(false)
	const menu_links = [
		{ url: '/', text: 'Home' },
		{ url: '/domestic', text: 'Domestic' },
		{ url: '/foreign', text: 'Foreign' },
		{ url: '/economy', text: 'Economy' },
		{ url: '/health', text: 'Health' },
		{ url: '/about', text: 'About' },
		{ url: '/contact-us', text: 'Contact' }
	]
</script>

<nav>
	<ul>
		{#each menu_links as { url, text }}
			<li>
				<a href={url} class:active={$page.url.pathname === url} onmouseup={() => (open = false)}>
					{text}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1rem;
		text-align: center;
	}

	:global(.active) {
		text-decoration: underline;
		text-decoration-color: var(--color-surface-dark);
		text-decoration-thickness: 6px;
	}
</style>
