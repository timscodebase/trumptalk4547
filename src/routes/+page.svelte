<script>
	import { ExternalLink, ElectionCountDown, Image, Posts } from '$lib'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<h1>Welcome to Trump Talk 45/47</h1>

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

<section>
	<h2>Links and other resources</h2>

	<div class="resources">
		<ExternalLink href="https://swampthevoteusa.com">
			<Image
				src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1728170297/Swamp_the_Vote_Logo_utbuob.png"
				alt="Swamp the Vote Logo"
				className="logo"
			/>
		</ExternalLink>
		<ExternalLink href="https://petition.theamericapac.org">
			<Image
				src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1728530480/American-pac_vjzl3k.jpg"
				alt="America PAC Logo"
				className="logo"
			/>
		</ExternalLink>
		<iframe
			allow="autoplay *; encrypted-media *;"
			frameborder="0"
			height="450"
			style="color-scheme:dark light;width:100%;max-width:660px;overflow:hidden;background:transparent;"
			sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
			src="https://embed.music.apple.com/us/playlist/sounds-of-maga/pl.u-76oN9ABT1gZVV"
		></iframe>
	</div>
</section>

<style>
	h1 {
		color: var(--color-accent);
		padding-bottom: 10px;
		text-shadow: 2px 2px var(--color-text-op);
	}

	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;

		li {
			padding: 0;
			margin: 0;
		}
	}

	.more-articles {
		display: block;
		color: var(--color-text);
		padding-top: 1.5rem;
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}

	.resources {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	@media (max-width: 1000px) {
		.posts {
			gap: 0.5rem;
		}

		.resources {
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	}
</style>
