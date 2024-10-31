<script>
	import { Image } from '$lib'
	import { name } from '$lib/config'

	const size = '350px'
</script>

<svelte:head>
	<title>{name} | About</title>
</svelte:head>

<h1><strong>Who is this guy</strong>, and why should I listem to him?</h1>

<section style="min-height: calc({size} + 20px);">
	<Image
		border={false}
		{size}
		width="350"
		src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1703907649/me_f8wxaa.png"
		alt="The website's creator, Tim Smith"
		className="flow-text"
	/>

	<p>
		Hi everyone! My name's Tim Smith, and I'm a Maryland native with a deep interest in American
		politics. My upbringing fostered a unique perspective: my father, a Republican and successful
		banker, instilled in me a respect for entrepreneurship and strong leadership, while my teacher
		mother, a Democrat, emphasized social responsibility and education. Despite a different path
		from my academically and athletically inclined siblings, I've always gravitated towards
		understanding the world through a different lens.
	</p>

	<p>
		That's where Donald Trump comes in. His unconventional approach to politics resonated deeply
		with me. Through this website, I aim to share news and insights related to Donald Trump, along
		with engaging discussions through my podcast and YouTube channel. Whether you're a longtime
		supporter or a curious observer, I invite you to join the conversation and explore different
		perspectives.
	</p>
</section>
