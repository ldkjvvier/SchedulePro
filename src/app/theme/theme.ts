import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export const theme = createTheme({
	palette: {
		mode: 'light',

		primary: {
			main: '#757575', // Gris medio en lugar de azul
			light: '#9e9e9e', // Gris más claro
			dark: '#424242', // Gris oscuro pero NO negro puro
		},

		secondary: {
			main: '#bdbdbd', // Gris claro para detalles secundarios
		},

		background: {
			default: '#f5f5f5', // Gris muy claro en lugar de blanco puro
			paper: '#eeeeee', // Un poco más oscuro que el fondo
		},

		text: {
			primary: '#424242', // Texto principal en gris oscuro
			secondary: '#757575', // Texto secundario en gris medio
		},

		action: {
			disabled: '#bdbdbd', // Gris claro para elementos deshabilitados
			hover: '#e0e0e0', // Gris claro en hover
		},
	},

	typography: {
		fontFamily: roboto.style.fontFamily,
		body2: {
			color: '#757575', // Color de texto secundario en body2
		},
	},
})
