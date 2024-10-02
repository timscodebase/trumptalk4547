<script lang="ts">
	type Props = {
		alt: string
		border?: boolean
		src: string
	}

	let { alt, border = true, src } = $props() as Props
</script>

{#if border}
	<img class="border" {src} {alt} loading="lazy" />
{:else}
	<img {src} {alt} loading="lazy" />
{/if}

<style>
	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
	}
	.border {
		border: 2px solid var(--color-accent);
	}
</style>
