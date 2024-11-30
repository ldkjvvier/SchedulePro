/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	prefix: 'tw-',
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx,mdx}',
		'./src/components/**/*.{js,jsx,ts,tsx,mdx}',
		'./src/app/**/*.{js,jsx,ts,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
