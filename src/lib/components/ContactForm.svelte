<script>
	let { email = '', error = '', message = '', name = '', success = false } = $props()

	async function handleSubmit(e) {
		e.preventDefault()
		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			})

			if (!response.ok) {
				throw new Error('Failed to send message')
			}

			success = true
			name = ''
			email = ''
			message = ''
		} catch (err) {
			error = err.message
		}
	}
</script>

<form onsubmit={handleSubmit}>
	<label for="name">Name</label>
	<input id="name" type="text" bind:value={name} required />

	<label for="email">Email</label>
	<input id="email" type="email" bind:value={email} required />

	<label for="message">Message</label>
	<textarea id="message" rows="4" bind:value={message} required></textarea>

	<button type="submit">Send</button>

	{#if success}
		<p style="color: green;">Your message has been sent successfully!</p>
	{/if}

	{#if error}
		<p style="color: red;">{error}</p>
	{/if}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 400px;
		margin: auto;
	}

	input,
	textarea,
	button {
		padding: 0.5rem;
		font-size: 1rem;
	}
</style>
