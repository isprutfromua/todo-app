const dev = process.env.NODE_ENV === 'development';

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [],
	purge: {
		content: ['./src/**/*.svelte'],
		enabled: !dev // disable purge in dev
	}
};
