const dev = process.env.NODE_ENV === 'development';

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: [
				'Josefin Sans',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'sans-serif'
			]
		},
		fontWeight: {
			normal: '400',
			bold: '700'
		},
		extend: {
			transitionDelay: {
				250: '250ms',
				350: '300ms',
				400: '400ms',
				450: '450ms',
				600: '600ms'
			},
			spacing: {
				70: '70px'
			},
			fontSize: {
				logo: ['2.5rem', { lineHeight: '1' }]
			},
			colors: {
				primary: 'hsl(220, 98%, 61%)',
				light: {
					gray: 'hsl(0, 0%, 98%)',
					blue: {
						35: 'hsl(235, 19%, 35%)',
						61: 'hsl(236, 9%, 61%)',
						84: 'hsl(233, 11%, 84%)',
						92: 'hsl(236, 33%, 92%)'
					}
				},
				dark: {
					blue: {
						11: 'hsl(235, 21%, 11%)',
						19: 'hsl(235, 24%, 19%)',
						26: 'hsl(237, 14%, 26%)',
						35: 'hsl(233, 14%, 35%)',
						43: 'hsl(235, 16%, 43%)',
						52: 'hsl(234, 11%, 52%)',
						85: 'hsl(234, 39%, 85%)',
						92: 'hsl(236, 33%, 92%)'
					}
				}
			},
			maxWidth: {
				container: '540px'
			},
			backgroundSize: {
				large: '100% 300px',
				small: '100% 200px'
			}
		}
	},
	purge: {
		content: ['./src/**/*.svelte'],
		enabled: !dev // disable purge in dev
	}
};
