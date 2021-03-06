import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'@utils': path.resolve('./src/utils'),
					'@lib': path.resolve('./src/lib')
				}
			}
		}
	}
}

export default config
