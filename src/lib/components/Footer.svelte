<script>
	import { description } from '$lib/config'
	import { BuyMeACoffee, Image } from '$lib'
</script>

<footer>
	<Image
		src="https://res.cloudinary.com/tithos/image/upload/c_scale,q_auto:eco,w_150/v1729009614/Trump_Talk_Logo_rrlvas.svg"
		alt="Trump Talk 45/47"
		width="150"
		className="logo"
	/>
	<div class="address center">
		Founded in &nbsp;
		<address>Gresham, Oregon</address>
		&nbsp; in 2024
	</div>
	<ul class="socials">
		<li>
			<a aria-label="Youtube" href="http://www.youtube.com/@TrumpTalk4547">
				<iconify-icon icon="fa6-brands:youtube"></iconify-icon>
			</a>
		</li>
		<li>
			<a aria-label="X" href="https://x.com/TrumpTalk4547">
				<iconify-icon icon="fa6-brands:x-twitter"></iconify-icon>
			</a>
		</li>
		<li>
			<a aria-label="Spotify" href="https://open.spotify.com/show/7wBMRk8wLKJIrQjmLHE0jy">
				<iconify-icon icon="fa6-brands:spotify"></iconify-icon>
			</a>
		</li>
		<li>
			<a aria-label="Patreon" href="https://www.patreon.com/TrumpTalk4547">
				<iconify-icon icon="fa6-brands:patreon"></iconify-icon>
			</a>
		</li>
		<li>
			<a aria-label="Discord" href="https://discord.gg/pB4DCCyC">
				<iconify-icon icon="fa6-brands:discord"></iconify-icon>
			</a>
		</li>
	</ul>
	<div class="buy-me-a-coffee">
		<BuyMeACoffee />
	</div>
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: 300px auto;
		grid-template-rows: auto auto;
		gap: 1rem 0px;
		grid-template-areas:
			'logo address'
			'socials buy-me-a-coffee';
		border-top: 2px solid var(--color-accent);
		margin-top: 2rem;
		padding: 2rem 10px;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.2);

		div {
			font-size: clamp(1rem, 2vw, 1.5rem);
		}

		p {
			font-size: 1rem;
			margin: 0;
		}

		ul {
			display: flex;
			list-style: none;
			margin: 0;
			padding: 0;
			gap: 1rem;

			a {
				color: var(--color-text);
				font-size: 1rem;
			}
		}
	}

	.logo {
		grid-area: logo;
	}
	.address {
		grid-area: address;
	}
	.socials {
		grid-area: socials;
		display: flex;
		place-items: center;
		padding-top: 1rem;

		a {
			font-size: 3rem;
		}
	}
	.buy-me-a-coffee {
		grid-area: buy-me-a-coffee;
	}

	@media (max-width: 1000px) {
		footer {
			grid-template-columns: auto;
			grid-template-rows: auto auto auto auto;
			grid-template-areas:
				'logo'
				'address'
				'socials'
				'buy-me-a-coffee';

			ul {
				margin-top: 1rem;
				flex-wrap: wrap;
				justify-content: center;
			}
		}
	}
</style>
