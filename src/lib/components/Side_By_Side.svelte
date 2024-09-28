<script lang="ts">
	let { children } = $props()
</script>

<div class="side-by-side">
	{@render children()}
</div>

<style>
	.side-by-side {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		gap: 0;
		margin: 1rem 0;
		overflow: hidden;
		/* border-radius: var(--radius-3); */
		border: 2px solid var(--color-accent);
	}
</style>
