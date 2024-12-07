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
		extend: {
			colors: {
				primary: '#FFFFFF', // Blanco Limpio
				secondary: '#F5F5F5', // Gris Claro
				'text-main': '#333333', // Gris Oscuro
				'text-secondary': '#6B7280', // Gris Medio
				accent: '#D1D5DB', // Gris Plateado
				/* BUTTON COLORS */
				'button-primary': '#2563EB', // Azul
				'button-secondary': '#F87171', // Rojo
				'button-tertiary': '#34D399', // Verde
			},
		},
	},
	plugins: [],
}
