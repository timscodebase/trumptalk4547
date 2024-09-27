<script lang="ts">
	import { daysUntilFutureDate } from '$lib/utils'

	const electionDay = new Date('2024-11-05')
</script>

<section>
	<h1>Countdown To The Election</h1>
	<p class="blue bold op-shadow">
		Only <span class="red">{daysUntilFutureDate(electionDay)}</span> days left!!
	</p>
</section>

<style>
	section {
		display: grid;
		place-content: center;
		text-align: center;

		p {
			display: inline-block;
			width: 100%;
			font-size: 2rem;
		}
	}
</style>
