<svelte:options runes={true} />

<script lang="ts">
	type Props = {
		alt: string
		border?: boolean
		size?: string
		src: string
		className?: string
	}

	let { alt, border = true, size = '100%', src, className = '' } = $props() as Props
</script>

<img
	style={`width: ${size}; height: ${size};`}
	class:border
	class={className}
	{src}
	{alt}
	loading="lazy"
/>

<style>
	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
	}
	.border {
		/* border: 2px solid var(--color-accent); */
	}
</style>
