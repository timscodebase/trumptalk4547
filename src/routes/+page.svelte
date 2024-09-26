<script>
	import { Image, Side_By_Side } from '$lib'
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<Image
		src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1727323076/Untitled_Sept_25_2024_vm1jwu.png"
		alt="Iconic Donald J Trump picture"
	/>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat laudantium iure libero neque
		impedit culpa porro! Quos nihil ad minima deserunt et dolores nam obcaecati consequuntur
		provident modi nemo molestiae repellat ab earum beatae dolore labore neque vero voluptatibus,
		minus inventore? Soluta possimus libero ut rem blanditiis sed suscipit.
	</p>
</section>

<section>
	<ul class="posts">
		{#each posts as post, i}
			<!-- if i is odd -->
			{#if i % 2}
				<li class="post" style={`--transition-name: post-${post.slug}`}>
					<Side_By_Side>
						<div>
							<a href={`/blog/${post.slug}`} class="title">
								<h2>{post.title}</h2>
							</a>
							<div class="meta">
								<p class="date">{formatDate(post.date)}</p>
								<p class="description">{post.description}</p>
							</div>
						</div>
						<Image src={post.image} alt={post.title} />
					</Side_By_Side>
				</li>
				<!-- else -->
			{:else}
				<li class="post" style={`--transition-name: post-${post.slug}`}>
					<Side_By_Side>
						<Image src={post.image} alt={post.title} />
						<div>
							<a href={`/blog/${post.slug}`} class="title">
								<h2>{post.title}</h2>
							</a>
							<div class="meta">
								<p class="date">{formatDate(post.date)}</p>
								<p class="description">{post.description}</p>
							</div>
						</div>
					</Side_By_Side>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>
	h2 {
		margin: 0;
		padding: 0;
		padding-bottom: 10px;
	}
	.meta {
		color: var(--color-text);
	}
</style>
