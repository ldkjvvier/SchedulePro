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
			main: '#424242', // Gris oscuro para mejor contraste
			light: '#757575', // Gris medio
			dark: '#212121', // Gris más oscuro casi negro
		},

		secondary: {
			main: '#9e9e9e', // Gris claro para detalles secundarios
		},

		background: {
			default: '#f5f5f5', // Fondo principal (gris muy claro, casi blanco)
			paper: '#ffffff', // Subfondo blanco para contrastar tarjetas y modales
		},

		text: {
			primary: '#212121', // Texto principal (negro suave) para mejor legibilidad
			secondary: '#616161', // Texto secundario (gris oscuro)
		},

		action: {
			disabled: '#bdbdbd', // Gris claro para elementos deshabilitados
			hover: '#e0e0e0', // Gris claro para efecto hover
		},
	},

	typography: {
		fontFamily: roboto.style.fontFamily,
		body2: {
			color: '#424242', // Texto más oscuro para mayor legibilidad
		},
	},
})
