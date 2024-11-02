<ul class="socials">
	<li>
		<a
			aria-label="Youtube"
			href="http://www.youtube.com/@TrumpTalk4547/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<iconify-icon icon="fa6-brands:youtube"></iconify-icon>
		</a>
	</li>
	<li>
		<a aria-label="X" href="https://x.com/TrumpTalk4547/">
			<iconify-icon icon="fa6-brands:x-twitter"></iconify-icon>
		</a>
	</li>
	<li>
		<a
			aria-label="Spotify"
			href="https://open.spotify.com/show/7wBMRk8wLKJIrQjmLHE0jy/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<iconify-icon icon="fa6-brands:spotify"></iconify-icon>
		</a>
	</li>
	<li>
		<a
			aria-label="Patreon"
			href="https://www.patreon.com/TrumpTalk4547/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<iconify-icon icon="fa6-brands:patreon"></iconify-icon>
		</a>
	</li>
	<li>
		<a
			aria-label="Discord"
			href="https://discord.gg/pB4DCCyC/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<iconify-icon icon="fa6-brands:discord"></iconify-icon>
		</a>
	</li>
	<li>
		<a
			aria-label="Twitter"
			href="https://trumptalks4547.gumroad.com/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<iconify-icon icon="mingcute:gumroad-line"></iconify-icon>
		</a>
	</li>
</ul>

<style>
	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1rem;

		a {
			color: var(--color-text);
			font-size: 1rem;

			&:hover {
				color: var(--color-accent);
			}
		}
	}

	.socials {
		grid-area: socials;
		display: flex;
		place-items: center;
		padding-top: 1rem;

		a {
			font-size: 3rem;
		}
	}

	@media (max-width: 1000px) {
		ul {
			margin-top: 1rem;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
