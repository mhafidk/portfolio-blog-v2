const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
	],
	daisyui: {
    themes: ['dracula'],
  },
}
