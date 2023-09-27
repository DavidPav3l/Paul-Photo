/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			'lg-xl': '1050px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			fontFamily: {
				MontSerrat: ['Montserrat Variable', 'MontSerrat', 'sans-serif'],
				SansPro: ['Source Sans Pro', 'sans-serif']
			},
			colors: {
				cream: '#f5eddf'
			}
		}
	},
	plugins: []
}
