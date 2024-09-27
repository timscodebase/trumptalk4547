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
		max-height: 100%;
		max-width: auto;
		object-fit: contain;
		/* border-radius: var(--radius-3); */
		border: 2px solid var(--color-accent);
	}
</style>
