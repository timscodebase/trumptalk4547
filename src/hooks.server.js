// Add this code to your `src/hooks.server.js` file
import { prerendering } from '$app/stores'

export async function handle({ event, resolve }) {
	// Check if the request is for a dynamically imported module
	if (event.url.pathname.startsWith('/.svelte-kit/generated/client')) {
		// Log the request and response
		console.log(`Request: ${event.url.pathname}`)
		const response = await resolve(event)
		console.log(`Response: ${response.status} ${response.statusText}`)
		return response
	}

	// Otherwise, return the default response
	return resolve(event)
}
