<script>
	import { name } from './../../lib/config.ts'
	import * as config from '$lib/config'

	let { data, form } = $props()
</script>

<svelte:head>
	<title>{config.name} | Contact</title>
</svelte:head>

<section class="form_wrap">
	<h1>Contact</h1>
	<form method="POST" action="?/contact">
		{#if form?.success}
			<!-- this message is ephemeral; it exists because the page was rendered in
				response to a form submission. it will vanish if the user reloads -->
			<p>Thanks for reaching out {data.name}</p>
		{/if}
		<label>
			<p>Name:</p>
			<input type="text" name="name" />
		</label>
		<label>
			<p>Email:</p>
			<input name="email" type="email" value={form?.email ?? ''} />
		</label>
		<label>
			<p>Message:</p>
			<textarea name="message" rows="5"></textarea>
		</label>
		<button type="submit">Submit</button>
		{#if form?.missing}<p class="error">All fields are required.</p>{/if}
	</form>
</section>

<style>
	.error {
		color: red;
		font-weight: bold;
	}

	.form_wrap {
		max-width: 1000px;
		margin: 0 auto;
	}

	form {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border-radius: var(--radius-3);
		border: 2px solid var(--color-accent);

		label {
			display: flex;
			gap: 1rem;

			input,
			textarea {
				border-radius: var(--radius-2);
				border: 1px solid var(--color-accent);
				background-color: transparent;
			}
		}

		button {
			background-color: var(--color-accent);
			color: var(--color-text);
			border: none;
			border-radius: var(--radius-2);
			padding: 0.5rem 1rem;
			font-weight: bold;
			cursor: pointer;
		}
	}

	@media (max-width: 1000px) {
		form {
			gap: 0.5rem;
		}

		label {
			flex-wrap: wrap;
		}
	}
</style>
