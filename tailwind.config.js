/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				druk: ["var(--font-drukFont)", "system-ui", "sans-serif"],
				gta: ["var(--font-gtaFont)", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
