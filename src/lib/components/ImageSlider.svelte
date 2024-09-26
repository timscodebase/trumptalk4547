<script>
	import { Image } from "$lib/types"

  type Props = {
    images: Image[];
    autoplay?: boolean;
    interval?: number;
  }

  let { images, autoplay, interval } = $props() as Props
  let currentIndex = 0;
  let intervalId = null;

  $effect(() => {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  });

  function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
</script>

<div class="image-slider">
	{#each images as image, i}
		<img
			src={image}
			class:active={i === currentIndex}
			class:inactive={i !== currentIndex}
			alt={`Image ${i + 1}`}
		/>
	{/each}

	<div class="controls">
		<button onclick={previousImage}>&lt;</button>
		<button onclick={nextImage}>&gt;</button>
	</div>
</div>

<style>
	.image-slider {
		position: relative;
		width: 100%;
		height: 500px; /* adjust height as needed */
	}

	.image-slider img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 0.5s;
	}

	.image-slider img.active {
		opacity: 1;
	}

	.image-slider img_inactive {
		opacity: 0;
	}

	.controls {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
	}

	.controls button {
		background-color: rgba(255, 255, 255, 0.5);
		border: none;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}
</div>
