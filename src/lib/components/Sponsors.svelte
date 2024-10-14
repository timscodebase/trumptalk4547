<script lang="ts">
	import { SponsorLink, Image } from '$lib'
</script>

<section>
	<h2>Links and other resources</h2>

	<div class="resources">
		<SponsorLink href="https://swampthevoteusa.com">
			<Image
				src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1728170297/Swamp_the_Vote_Logo_utbuob.png"
				alt="Swamp the Vote Logo"
				className="logo"
			/>
		</SponsorLink>
		<SponsorLink href="https://petition.theamericapac.org">
			<Image
				src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1728530480/American-pac_vjzl3k.jpg"
				alt="America PAC Logo"
				className="logo"
			/>
		</SponsorLink>
		<SponsorLink href="https://www.faithfulelections.org/rcv">
			<Image
				src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1728877798/rank-choice-voting_fogo0l.png"
				alt="No rank Choice Voting Logo"
				className="logo"
			/>
		</SponsorLink>

		<SponsorLink href="https://www.rev.com/blog/transcript-category/donald-trump-transcripts">
			Donald Trump Transcripts
		</SponsorLink>
	</div>
	<!-- svelte-ignore a11y_missing_attribute -->
	<iframe
		allow="autoplay *; encrypted-media *;"
		frameborder="0"
		height="450"
		style="color-scheme:dark light;width:100%;max-width:660px;overflow:hidden;background:transparent;"
		sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
		src="https://embed.music.apple.com/us/playlist/sounds-of-maga/pl.u-76oN9ABT1gZVV"
	></iframe>
</section>

<style>
	.resources {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		padding-bottom: 1rem;
	}

	@media (max-width: 1000px) {
		.resources {
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	}
</style>
