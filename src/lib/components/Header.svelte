<script>
	import * as config from '$lib/config'
	import { Image, Meta, Nav } from '$lib'

	const links = config.nav_links
</script>

<Meta />

<header>
	<a href="/">
		<Image
			src="https://res.cloudinary.com/tithos/image/upload/c_scale,f_auto,q_auto:eco,w_300/v1728970925/Trump_Talk_Logo_ekwhdt.png"
			alt="Trump Talk 45/47"
		/>
	</a>
	<Nav {links} />
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
			text-align: center;
			font-size: 3rem;
			padding-bottom: 0;
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
</style>
