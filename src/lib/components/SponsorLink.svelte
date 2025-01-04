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
		<span>{@render children()}</span>
	{/if}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--color-text);
		border-bottom: 2px dotted var(--color-highligh);

		&:hover {
			color: var(--color-text);
			border-bottom: 2px solid var(--color-highligh);
		}
	}

	span {
		font-size: clamp(1.5rem, 3vw, 2.5rem);
		margin: 0.5rem 0;
		color: var(--color-text);
	}
</style>
