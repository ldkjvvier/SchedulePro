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
			main: '#616161', // Gris más oscuro para mayor contraste
			light: '#9e9e9e', // Gris claro
			dark: '#424242', // Gris oscuro
		},

		secondary: {
			main: '#9e9e9e', // Gris más claro para detalles secundarios
		},

		background: {
			default: '#fafafa', // Fondo más claro para evitar saturación
			paper: '#ffffff', // Fondo blanco para un buen contraste
		},

		text: {
			primary: '#212121', // Gris muy oscuro (casi negro) para texto principal
			secondary: '#757575', // Gris medio para texto secundario
		},

		action: {
			disabled: '#bdbdbd', // Gris claro para elementos deshabilitados
			hover: '#e0e0e0', // Gris claro en hover
		},
	},

	typography: {
		fontFamily: roboto.style.fontFamily,
		body2: {
			color: '#616161', // Texto en gris más oscuro para mayor legibilidad
		},
	},
})
