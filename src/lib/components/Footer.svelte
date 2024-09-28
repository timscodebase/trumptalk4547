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
			<a href="https://discord.gg/pB4DCCyC">
				<iconify-icon icon="ic:baseline-discord"></iconify-icon>
			</a>
		</li>
		<li>
			<a href="http://www.youtube.com/@TrumpTalk4547">
				<iconify-icon icon="mdi:youtube"></iconify-icon>
			</a>
		</li>
		<li>
			<a href="https://x.com/TrumpTalk4547">
				<iconify-icon icon="ri:twitter-x-fill"></iconify-icon>
			</a>
		</li>
		<li>
			<a href="https://www.patreon.com/TrumpTalk4547">
				<iconify-icon icon="fa6-brands:patreon"></iconify-icon>
			</a>
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
			font-size: 1.5rem;
		}

		ul {
			display: flex;
			list-style: none;
			margin: 0;
			padding: 0;
			gap: 1rem;

			a {
				color: var(--color-text);
				font-size: 1.5rem;
			}
		}
	}
</style>
