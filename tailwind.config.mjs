/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ["IBM Plex Serif", "ui-sans-serif", "system-ui", "-apple-system"],
			sans: ["IBM Plex Sans", "system-ui", "-apple-system"],
			headline: [
				"IBM Plex Sans Condensed",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
			],
		},
		extend: {},
	},
	plugins: [],
};
