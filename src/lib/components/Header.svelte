<script>
	import * as config from '$lib/config'
	import { DarkModeToggle, Meta, Nav } from '$lib'

	const links = config.nav_links
</script>

<Meta />

<header>
	<a href="/">
		<div class="logo">
			<span class="logo-span header-font"
				><span class="red">Trump</span> <span class="op-shadow">Talk</span>
				<span class="blue">45/47</span>
			</span>
			<p>{config.description}</p>
		</div>
	</a>
	<Nav {links} />
	<DarkModeToggle />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1.5rem;
		border-bottom: 3px solid var(--color-accent);
		margin-bottom: 2rem;
		padding-bottom: 1rem;

		margin-bottom: 1rem;

		a {
			text-decoration: none;
			color: var(--text);
		}

		p {
			font-size: 1rem;
		}
	}

	@media (max-width: 1000px) {
		header {
			flex-direction: column;
		}

		.logo-span {
			padding-bottom: 2rem;
		}

		p {
			text-align: center;
			line-height: 2rem;
		}
	}

	.logo {
		display: flex;
		flex-direction: column;

		p {
			margin: 0;
			margin-top: -8px;
		}
	}

	@media (max-width: 1000px) {
		.logo-span {
			text-align: center;
			font-size: 3rem;
			padding-bottom: 0;

			p {
				margin-bottom: 0.5rem;
				font-size: 2rem;
			}
		}
	}
</style>
