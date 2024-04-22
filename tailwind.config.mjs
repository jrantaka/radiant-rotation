/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ["Plantin MT Pro", "ui-sans-serif", "system-ui", "-apple-system"],
			sans: ["Nitti Grotesk", "ui-sans-serif", "system-ui", "-apple-system"],
			headline: [
				"Neue Haas Text Pro",
				"InterDisplay",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
			],
		},
		extend: {},
	},
	plugins: [],
};
