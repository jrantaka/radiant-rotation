/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ["linotype-sabon", "ui-sans-serif", "system-ui", "-apple-system"],
			sans: ["Neue Haas Grotesk Text Pro", "system-ui", "-apple-system"],
			headline: [
				"neue-haas-grotesk-text",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
			],
		},
		extend: {},
	},
	plugins: [],
};
