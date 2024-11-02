<script>
	import { name } from './../../lib/config.ts'
	import * as config from '$lib/config'

	let { data, form } = $props()
</script>

<svelte:head>
	<title>{config.name} | Contact</title>
</svelte:head>

<h1>Contact Us</h1>

<section>
	<address>
		<p>1797 NW Civic Dr.</p>
		<p>Gresham, Oregon 97030</p>
		<span>Email: <a href="mailto:trumptalk4547@gmail.com"> TrumptTalk4547@gmail.com </a></span>
		<p>Phone: <a href="tel:415-694-3568">415-694-3568</a></p>
	</address>
</section>

<style>
	section {
		display: flex;
		place-items: center;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.2);
	}
	address {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		a,
		p,
		span {
			font-size: clamp(1rem, 3vw, 2.5rem);
			font-weight: bold;
			text-align: center;
		}
	}
</style>
