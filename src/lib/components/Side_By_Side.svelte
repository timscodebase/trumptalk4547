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
		overflow: hidden;
		border: 2px solid var(--color-accent);
	}
</style>
