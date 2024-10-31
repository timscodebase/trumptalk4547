<script>
	import { ElectionCountDown, Image, Posts, Sponsors } from '$lib'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<p>
		Trump Talk 45/47 is your premier source for comprehensive news, insightful analysis, and
		powerful speeches from President Donald J. Trump. Whether you are looking for the latest updates
		on his initiatives, in-depth breakdowns of his policies, or recordings of his most impactful
		speeches, you'll find it all here. Our goal is to keep you informed and engaged with the
		developments and perspectives of the 45th and 47th President of the United States.
	</p>

	<Image
		src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1727323076/Untitled_Sept_25_2024_vm1jwu.png"
		alt="Iconic Donald J Trump picture"
	/>

	<h2>Stay Informed with Our News and Analysis</h2>

	<p>
		Our dedicated team of journalists and analysts provide timely and accurate news coverage of
		President Trump's activities and the broader political landscape. We dive deep into the key
		issues, offering detailed analysis and commentary to help you understand the implications and
		significance of current events. From legislative updates to political rallies, we cover it all
		to ensure you never miss a beat.
	</p>

	<h3>Engage with Our Multimedia Content</h3>

	<p>
		In addition to written content, Trump Talk 45/47 features a podcast and a YouTube channel where
		we discuss the latest news and provide exclusive interviews and commentary. Tune in to our
		podcast for in-depth discussions and insights, or watch our YouTube videos for visual and
		engaging content. Subscribe to stay connected and be part of the conversation surrounding
		President Trump's ongoing influence and legacy.
	</p>

	<ElectionCountDown />
</section>

<Posts {posts} />

<a class="more-articles" href="/blog">More articles &rarr;</a>

<Sponsors />

<style>
	.more-articles {
		display: block;
		color: var(--color-text);
		padding-top: 1.5rem;
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}
</style>
