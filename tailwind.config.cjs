/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				MontSerrat: ['Montserrat Variable', 'MontSerrat', 'sans-serif'],
				SansPro: ['Source Sans Pro', 'sans-serif']
			},
			colors: {
				cream: '#f5eddf'
			},
			screens: {
				xs: '375px'
			}
		}
	},
	plugins: []
}
