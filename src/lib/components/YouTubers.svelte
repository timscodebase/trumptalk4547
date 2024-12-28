<script lang="ts">
	const you_tubers = [
		{
			name: 'The Young Turks',
			description: 'The Largest Online News Show in the World. Hosted by Cenk Uygur & Ana Kasparian. LIVE weekdays 6-8pm ET.',
			url: 'https://www.youtube.com/@TheYoungTurks/videos',
			'political-leaning': 'left'
		},
		{
			name: 'The Hill',
			description: 'The Hill is the premier source for policy and political news. Follow for all the latest on campaigns, Congress and the White House.',
			url: 'https://www.youtube.com/@TheHill/videos',
			'political-leaning': 'middle'
		},
		{
			name: 'The Daily Wire',
			description: 'The Daily Wire is a politically conservative news and opinion website featuring daily podcasts by Andrew Klavan, Michael Knowles, and Editor-In-Chief Ben Shapiro.',
			url: 'https://www.youtube.com/@TheDailyWire/videos',
			'political-leaning': 'right'
		},
		{
			name: 'The Rubin Report',
			description: 'The Rubin Report is the largest talk show about free speech and big ideas on YouTube.',
			url: 'https://www.youtube.com/@RubinReport/videos',
			'political-leaning': 'right'
		},
		{
			name: 'The Jimmy Dore Show',
			description: 'The Jimmy Dore Show is a hilarious and irreverent take on news, politics and culture featuring Jimmy Dore, a professional stand up comedian, author and podcaster.',
			url: 'https://www.youtube.com/@TheJimmyDoreShow/videos',
			'political-leaning': 'left'
		},
		{
			name: 'The Real News Network',
			description: 'The Real News Network (TRNN) produces independent, verifiable, fact-based journalism that engages ordinary people in solving the critical problems of our times.',
			url: 'https://www.youtube.com/@TheRealNews/videos',
			'political-leaning': 'left'
		},
		{
			name: 'The Damage Report',
			description: "The Damage Report is the only daily news show that offers a progressive take on the day's events, featuring a mix of news, politics, and culture.",
			url: 'https://www.youtube.com/@TheDamageReport/videos',
			'political-leaning': 'left'
		},
		{
			name: 'Sky News',
			description: 'The full story, first. Free, wherever you get your news.',
			url: 'https://www.youtube.com/@SkyNews/videos',
			'political-leaning': 'middle'
		},
		{
			name: 'LV NATION',
			description: `Welcome to the LV nation where we seek truth and we react to today's culture, politics & world overall!! we will be going live on here 💪🏽💪🏽`,
			url: 'https://www.youtube.com/@The_LVNATION/videos',
			'political-leaning': 'right'
		},
		{
			name: 'StateOfDaniel',
			description: 'Right-leaning Independent. Always approaching topics with an open mind.',
			url: 'https://www.youtube.com/@StateOfDaniel',
			'political-leaning': 'right'
		},
		{
			name: 'DeVory Darkins',
			description: 'God, Family, and Country First! Common Sense Commentary for Uncommon Times!',
			url: 'https://www.youtube.com/@DeVoryDarkins',
			'political-leaning': 'right'
		},
		{
			name: 'Ron Yates',
			description: 'For Business InquiriesEmail theronyatesshow@gmail.com',
			url: 'https://www.youtube.com/@RonYates1',
			'political-leaning': 'right'
		},
		{
			name: 'Tulsi Gabbard',
			description: 'Honest. Independent. Unafraid. Always with aloha.',
			url: 'https://www.youtube.com/@TulsiGabbard',
			'political-leaning': 'right'
		},
		{
			name: 'Rasmussen Reports',
			description:
				"Rasmussen Reports is an electronic publishing firm specializing in the collection, publication, and distribution of public opinion polling information.  Since its founding in 2003, Rasmussen Reports work has been followed by millions on a wide variety of media platforms. We regularly release our results at RasmussenReports.com, America's most visited public opinion website, and through a daily email newsletter, Twitter and Facebook.",
			url: 'https://www.youtube.com/@rasmussen_poll',
			'political-leaning': 'middle'
		}
	]
</script>

<section>
	{#each you_tubers as you_tuber}
		<article>
			<a href={you_tuber.url} target="_blank" rel="noopener noreferrer">
				<img src={you_tuber.image} alt={you_tuber.name} loading="lazy" />
				<h3>{you_tuber.name}</h3>
			</a>
			<p>{you_tuber.description}</p>
		</article>
	{/each}
</section>

<style>
	a {
		& * {
			color: var(--color-accent);
		}
	}
</style>
