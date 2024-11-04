<script lang="ts">
	import { load } from './../../routes/they-say-it-best/+page.ts'
	import { description } from '$lib/config'

	const you_tubers = [
		{
			name: 'Red Eagle Politics',
			description:
				'This channel consists of political commentary, strategy, and analysis from a right-leaning perspective.',
			url: 'https://www.youtube.com/@RedEaglePolitics/videos',
			image:
				'https://yt3.googleusercontent.com/GPK2toZ9pyW1xsgMimCdVQmk22pyy28OrZ7kAOi2c_dNxIERzjFbsWJvJMJc94Kiuq_vuOwY=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'Sky News',
			description: 'The full story, first. Free, wherever you get your news.',
			url: 'https://www.youtube.com/@SkyNews/videos',
			image:
				'https://yt3.googleusercontent.com/KULPln7L2HaMtu5cuq89eb773a-jQQTyTctZGSs8razRyl-mp2q967tbrlWVwbORUBZVhcPgbA=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'LV NATION',
			description:
				'The Hill, the true source of news. The Hill, the true source of news. The Hill, the true source of news. ',
			url: 'https://www.youtube.com/@The_LVNATION/videos',
			image:
				'https://yt3.googleusercontent.com/iS2nu5bJ52rTOlnH417coOBMDYta1gHWzS_7Fjgwa79jyuiqTiopfxJM0-A46infXP2j9te2qHM=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'StateOfDaniel',
			description: 'Right-leaning Independent. Always approaching topics with an open mind.',
			url: 'https://www.youtube.com/@StateOfDaniel',
			image:
				'https://yt3.googleusercontent.com/PvBsW8bBJ9CyY9xDu0pOb0hfxzIsnh0hXd_WGE3NvnqlWAbrA490BNDt42RpUzUFYVF2FsM8KeQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'DeVory Darkins',
			description: 'God, Family, and Country First! Common Sense Commentary for Uncommon Times!',
			url: 'https://www.youtube.com/@DeVoryDarkins',
			image:
				'https://yt3.googleusercontent.com/qPC69SlcRVp0MuJVFc19tT11STr8OF6clRz_gE475cCddpr1deguBHVIRh7BgeY2VK2KekT-nQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'Ron Yates',
			description: 'For Business InquiriesEmail theronyatesshow@gmail.com',
			url: 'https://www.youtube.com/@RonYates1',
			image:
				'https://yt3.googleusercontent.com/c5WjaPARQQowNJdfJmGo6_nuLpY4bN5RvaUbCVDL3SBtxokZQ_4LI0ZsIX5hZXuGhNeyuLfGMg=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'Tulsi Gabbard',
			description: 'Honest. Independent. Unafraid. Always with aloha.',
			url: 'https://www.youtube.com/@TulsiGabbard',
			image:
				'https://yt3.googleusercontent.com/NsbwzMOoCKLK6SGfs7gR0VDJ-5BuJ_F-_pBuH-_xShUNXpr51Z5KUM3ILXXLi-Tyy0QMjggU3IQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
		},
		{
			name: 'Rasmussen Reports',
			description:
				"Rasmussen Reports is an electronic publishing firm specializing in the collection, publication, and distribution of public opinion polling information.  Since its founding in 2003, Rasmussen Reports work has been followed by millions on a wide variety of media platforms. We regularly release our results at RasmussenReports.com, America's most visited public opinion website, and through a daily email newsletter, Twitter and Facebook.",
			url: 'https://www.youtube.com/@rasmussen_poll',
			image:
				'https://yt3.googleusercontent.com/gO8wC8MA3c1ryG9ogCaiayrKqWFbOvGBzVpZVXUKPQ6gVDX_L1EX-OuGw88Z9cCLbAnAWYjt=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
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
