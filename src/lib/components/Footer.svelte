<script>
	import { description } from '$lib/config'
</script>

<footer>
	<span class="logo-span header-font">
		<span class="red">Trump</span>
		<span class="op-shadow">Talk</span>
		<span class="blue">45/47</span>
	</span>
	<p>&copy; {new Date().getFullYear()}</p>
	<ul>
		<li>
			<a aria-label="Youtube" href="http://www.youtube.com/@TrumpTalk4547"> YouTube </a>
		</li>
		<li>
			<a aria-label="X" href="https://x.com/TrumpTalk4547"> X </a>
		</li>
		<li>
			<a aria-label="Spotify" href="https://open.spotify.com/show/7wBMRk8wLKJIrQjmLHE0jy">
				Spotify
			</a>
		</li>
		<li>
			<a aria-label="Patreon" href="https://www.patreon.com/TrumpTalk4547">
				Patreon
				<iconify-icon icon="fa6-brands:patreon"></iconify-icon>
			</a>
		</li>
		<li>
			<a aria-label="Discord" href="https://discord.gg/pB4DCCyC"> Discord </a>
		</li>
	</ul>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 2px solid var(--color-accent);
		margin-top: 2rem;
		padding: 2rem 1rem;
		text-align: center;

		p {
			font-size: 1rem;
			margin: 0;
		}

		ul {
			display: flex;
			list-style: none;
			margin: 0;
			padding: 0;
			gap: 1rem;

			a {
				color: var(--color-text);
				font-size: 1rem;
			}
		}
	}

	@media (max-width: 1000px) {
		footer {
			flex-direction: column;

			ul {
				margin-top: 1rem;
				flex-wrap: wrap;
				justify-content: center;
			}
		}
	}
</style>
