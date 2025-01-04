<script lang="ts">
	import { daysUntilFutureDate } from '$lib/utils'
	const inaugurationDay = new Date('2025-01-20')
</script>

<section>
	<span class="header">Countdown To Inauguration Day</span>
	<p class="blue bold op-shadow">
		<span class="red mono">{daysUntilFutureDate(inaugurationDay)} days</span>
	</p>
</section>

<style>
	.header {
		font-size: 1.8rem;
		font-weight: bold;
		color: var(--color-text);
	}
	section {
		display: grid;
		place-content: center;
		text-align: center;
		background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)),
			linear-gradient(
				to right,
				rgba(196, 0, 0, 0.65),
				rgba(197, 197, 197, 0.45),
				rgba(0, 35, 173, 0.65)
			),
			url('https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1727595366/American_Flag_vgd5il.webp');
		background-size: cover;
		text-shadow: 0px 2px 2px var(--color-text-op);
		border: 2px solid var(--color-highligh);
		margin: 1rem 0;
		padding: 1rem;

		p {
			display: inline-block;
			width: 100%;
			font-size: 2rem;
			padding: 0;
			margin: 0;
			text-shadow: 2px 2px 2px var(--color-text-op);
		}
	}
</style>
