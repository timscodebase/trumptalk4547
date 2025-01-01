<script>
	import BuyMeACoffee from './BuyMeACoffee.svelte';
	import Image from './Image.svelte';
	import Socials from './Socials.svelte';
</script>

<footer>
	<div class="wrap">
		<Image
			src="https://res.cloudinary.com/tithos/image/upload/c_scale,q_auto:eco,w_150/v1729009614/Trump_Talk_Logo_rrlvas.svg"
			alt="Trump Talk 45/47"
			width="150"
			className="logo"
		/>
		<p>© {new Date().getFullYear()} Trump Talk 45/47</p>
		<div class="address center">
			Founded in &nbsp;
			<address>Gresham, Oregon</address>
			&nbsp; in 2024
		</div>
		<div class="socials">
			<Socials />
		</div>

		<div class="buy-me-a-coffee">
			<BuyMeACoffee />
		</div>
	</div>
</footer>

<style>
	.wrap {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		place-items: center;
		gap: 1rem 0px;
		grid-template-areas:
			'logo address'
			'socials buy-me-a-coffee';
	}

	@media (max-width: 1000px) {
		.wrap {
			grid-template-columns: auto;
			grid-template-rows: auto auto auto auto;
			grid-template-areas:
				'logo'
				'address'
				'socials'
				'buy-me-a-coffee';
		}
	}

	footer {
		display: grid;
		border-top: 2px solid var(--color-highligh);
		margin-top: 2rem;
		padding: 2rem 10px;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.2);

		div {
			display: flex;
			place-items: center;
			font-size: clamp(1rem, 2vw, 1.5rem);
		}
	}

	.address {
		grid-area: address;
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
		}
	}
</style>
