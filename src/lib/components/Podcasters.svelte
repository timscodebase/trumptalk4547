<script lang="ts">
	const podcasters = [
		{
			name: 'The Megyn Kelly Show',
			description:
				'The Megyn Kelly Show is your home for open, honest and provocative conversations with the most interesting and important political, legal and cultural figures today. No BS. No agenda. And no fear',
			url: 'https://podcasts.apple.com/us/podcast/the-megyn-kelly-show/id1532976305',
			image:
				'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/8c/12/3a/8c123a1b-3612-c1f5-4c22-e5ad27965e9b/mza_4115034437521929187.jpg/300x300bb.webp'
		},
		{
			name: 'Tucker Carlson Network',
			description:
				"The Tucker Carlson Show is your beacon of free speech and honest reporting in a media landscape dominated by misinformation. The only solution to ending the propaganda spiral is by telling the truth. That's our job. Every day. No matter what.",
			url: 'https://podcasts.apple.com/us/podcast/the-tucker-carlson-show/id1719657632',
			image:
				'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/2b/6d/00/2b6d0074-5308-595c-576a-35a90df76194/mza_18177824274058785796.jpg/300x300bb.webp'
		},
		{
			name: 'Mark Levin Podcast',
			description:
				'Mark Levin is one of the hottest talk radio hosts in America. A prominent conservative commentator, best-selling author and constitutional scholar, Mark offers fresh takes on daily news headlines and dissects important events of the day. Heard weeknights on nearly 400 radio stations, Levin is loved in every corner of America. He cuts through the noise with his passion and intellect, often saying things others won’t. Or as Mark himself would declare: “That’s right. I said it!”',
			url: 'https://podcasts.apple.com/us/podcast/mark-levin-podcast/id209377688',
			image:
				'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/eb/a4/ca/eba4caf5-6c82-b76b-e0ed-44d20540bc44/mza_12376995222786825553.jpeg/300x300bb.webp'
		},
		{
			name: 'The Glenn Beck Program',
			description:
				"Storytelling, insight and compelling perspective on American culture and politics. Glenn Beck's quick wit, candid opinions and engaging personality have made this one of the most popular radio programs in America. Watch The Glenn Beck Radio Program, Monday through Friday, 9am - 12pm ET on BlazeTV. www.BlazeTV.com/Glenn",
			url: 'https://podcasts.apple.com/us/podcast/the-glenn-beck-program/id620967489',
			image:
				'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/02/ec/16/02ec1687-f50c-932d-bd9f-1a491ff985c8/mza_11642726901970161660.jpg/300x300bb.webp'
		}
	]
</script>

{#each podcasters as podcaster}
	<a href={podcaster.url} target="_blank" rel="noopener noreferrer">
		<div class="podcaster">
			<img src={podcaster.image} alt={podcaster.name} loading="lazy" />
			<h3>{podcaster.name}</h3>
		</div>
	</a>
	<p>{podcaster.description}</p>
{/each}
