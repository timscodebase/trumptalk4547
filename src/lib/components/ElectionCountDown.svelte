<script lang="ts">
	import { daysUntilFutureDate } from '$lib/utils'

	const electionDay = new Date('2024-11-05')
</script>

<section>
	<span class="header">Countdown To The Election</span>
	<p class="blue bold op-shadow">
		Only <span class="red mono">{daysUntilFutureDate(electionDay)}</span> days left!!
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
		background-image: url('https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1727595366/American_Flag_vgd5il.webp');
		background-size: cover;
		text-shadow: 0px 2px 2px var(--color-text-op);
		border: 2px solid var(--color-accent);

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
