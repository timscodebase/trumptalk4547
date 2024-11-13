<script>
	let {
		message = '🇺🇸 This Domain is For Sale!! 🇺🇸 7 Figures so far... 🤑 This Domain is For Sale!! 🇺🇸 7 Figure so far... 🤑 This Domain is For Sale!! 🇺🇸',
		speed = 60
	} = $props()
</script>

<div class="banner-container">
	<div class="banner" style="animation-duration: {speed}s">
		<span>{message}</span>
	</div>
</div>

<style>
	.banner-container {
		display: flex;
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
		padding: 10px 0;
		position: relative;
	}

	.banner {
		display: inline-block;
		white-space: nowrap;
		animation: scroll linear infinite;

		span {
			font-size: 2.5rem;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
