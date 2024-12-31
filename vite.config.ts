import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
<<<<<<< HEAD

export default defineConfig({
	plugins: [sveltekit()],
=======
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
>>>>>>> main
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
})
