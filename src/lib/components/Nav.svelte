<script lang="ts">
	import { page } from '$app/stores'

	let open = $state(false)
	const menu_links = [
		{ url: '/home', text: 'Home' },
		{ url: '/blog', text: 'Blog' },
		{ url: '/they-say-it-best', text: 'They Say It Best' },
		{ url: '/contact', text: 'Contact' },
		{ url: '/about', text: 'About' },
		{ url: '/privacy', text: 'Privacy' },
		{ url: '/tos', text: 'Terms of Service' }
	]
</script>

{#snippet toggle()}
	<button
		aria-label="Menu Toggle"
		class:close={open}
		onclick={() => {
			console.log('clicked')
			open = !open
		}}
	>
		<iconify-icon icon={`line-md:${open ? 'menu-to-close-transition' : 'close-to-menu-transition'}`}
		></iconify-icon>
	</button>
{/snippet}

{@render toggle()}

<div class="nav-draw" class:open>
	{@render toggle()}
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
</div>

<style>
	button {
		position: fixed;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 2rem;
		color: var(--color-text);
		z-index: 100;
	}

	.close {
		color: var(--color-accent);
	}

	.nav-draw {
		position: fixed;
		display: grid;
		place-items: center;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: var(--color-blue);
		z-index: 100;
		transform: translateX(100%);
		transition: transform 300ms;
		will-change: transform;

		&.open {
			transform: translateX(0);
		}
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1rem;
		text-align: center;

		a {
			font-size: clamp(3rem, 6vw, 5.5rem);
			font-family: var(--font-nav);
			line-height: clamp(4rem, 6vw, 6.5rem);
			color: var(--color-accent);

			&:hover {
				color: var(--color-text);
				text-decoration-color: var(--color-accent);
			}
		}
	}

	@media (max-width: 1000px) {
		nav {
			margin: 5px auto 0 auto;
			font-size: 1.25rem;
		}
	}

	:global(.active) {
		text-decoration: underline;
		text-decoration-color: var(--color-surface-dark);
		text-decoration-thickness: 6px;
	}
</style>
