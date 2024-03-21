/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ["Rowan", "ui-sans-serif", "system-ui", "-apple-system"],
			sans: ["Plein", "ui-sans-serif", "system-ui", "-apple-system"],
		},
		extend: {},
	},
	plugins: [],
};
