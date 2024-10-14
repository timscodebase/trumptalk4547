<svelte:options runes={true} />

<script lang="ts">
	interface Props {
		children: any
		href: string
		text?: string
	}
	let { children, href, text } = $props() as Props
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	{#if text}
		{text}
	{:else}
		{@render children()}
	{/if}
</a>

<style>
	a {
		display: inline-flex;
		text-decoration: none;
		color: var(--color-text);
		border-bottom: 2px dotted var(--color-accent);

		&:hover {
			color: var(--color-text);
			border-bottom: 2px solid var(--color-accent);
		}
	}
</style>
