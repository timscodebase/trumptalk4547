<script lang="ts">
	type Props = {
		src: string
		alt: string
	}

	let { src, alt } = $props() as Props
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
		border-radius: var(--radius-3);
		border: 2px solid var(--color-accent);
	}
</style>
