/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pinkLight: 'hsl(275, 100%, 97%)',
				purpleLight: 'hsl(292, 16%, 49%)',
				purpleDark: 'hsl(292, 42%, 14%)',
			}
		},
	},
	plugins: [],
}