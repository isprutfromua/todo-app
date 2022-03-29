import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sourceMap: dev,
		postcss: {
			plugins: [tailwind, autoprefixer]
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
