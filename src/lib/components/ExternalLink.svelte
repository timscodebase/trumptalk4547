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
	<iconify-icon icon="fe:link-external"></iconify-icon>
</a>

<style>
	a {
		display: inline-flex;
		text-decoration: none;
		color: var(--color-text);
		border-bottom: 2px dotted var(--color-highligh);

		&:hover {
			color: var(--color-text);
			border-bottom: 2px solid var(--color-highligh);
		}
	}
</style>
