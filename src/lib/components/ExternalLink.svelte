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
		display: block;
		text-decoration: none;
		color: var(--color-text);

		&:hover {
			text-decoration: underline;
		}
	}
</style>
