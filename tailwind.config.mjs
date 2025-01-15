/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				hero: ['"Days One"'],
				body: ["Poppins"]
			},
			colors: {
				'true-blue': '#0466C8',
				'rich-black': '#0D1B2A',
				'oxford-blue': "#002855"
			}
		},
	},
	plugins: [require('tailwindcss-motion'), ('@tailwindcss/forms')],
}
