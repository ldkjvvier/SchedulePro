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
			main: '#42a5f5',
			light: '#64b5f6',
			dark: '#1565c0',
		},
		secondary: {
			main: '#90caf9',
		},
		background: {
			default: '#ffffff',
			paper: '#f5f5f5',
		},
		text: {
			primary: '#000000',
			secondary: '#bdbdbd',
		},
		action: {
			disabled: '#e0e0e0',
			hover: '#e3f2fd',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
})
