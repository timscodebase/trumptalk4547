<script>
	import * as config from '$lib/config'
	import { Image, Meta } from '$lib'
</script>

<Meta />

<header>
	<a href="/home">
		<Image
			src="https://res.cloudinary.com/tithos/image/upload/c_scale,q_auto:eco,w_150/v1729009614/Trump_Talk_Logo_rrlvas.svg"
			alt="Trump Talk 45/47"
			width="200"
			className="logo"
		/>
		<p>{config.description}</p>
	</a>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: end;
		padding-top: 1.5rem;
		border-bottom: 3px solid var(--color-accent);
		margin-bottom: 2rem;
		padding-bottom: 1rem;

		margin-bottom: 1rem;

		a {
			display: flex;
			place-items: end;
			gap: 0.5rem;
			text-decoration: none;
			color: var(--text);
		}

		p {
			font-size: 1rem;
			margin: 0;
			padding: 0;
		}
	}

	@media (max-width: 1000px) {
		header {
			flex-direction: column;
		}

		a {
			flex-direction: column;
			justify-content: center;
			margin: 0 auto;

			:global(.logo) {
				margin: 0 auto;
			}
		}

		p {
			text-align: center;
			line-height: 2rem;
		}
	}
</style>
