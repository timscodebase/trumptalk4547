<svelte:options runes={true} />

<script lang="ts">
	let { text, href } = $props()
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	{text}
	<iconify-icon icon="fe:link-external"></iconify-icon>
</a>

<style>
	a {
		text-decoration: none;
		text-decoration: none;
		color: var(--color-text);
		border-bottom: 2px dotted var(--color-accent);

		&:hover {
			color: var(--color-text);
			border-bottom: 2px solid var(--color-accent);
		}
	}
</style>
