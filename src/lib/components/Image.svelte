<script lang="ts">
	type Props = {
		alt: string
		border?: boolean
		padding?: boolean
		width?: number
		src: string
		className?: string
	}

	let {
		alt,
		border = true,
		padding = 0,
		width = '100%',
		src,
		className = ''
	} = $props() as Props
</script>

<img
	style={`width: ${width}px; padding: ${padding ? '0 1rem' : 0}`}
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
		margin: 0 auto;
	}
</style>
