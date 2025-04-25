import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './theme/themeRegistry'
import Header from './components/Header'
import Footer from './components/Footer'
import QueryProvider from './components/QueryProvider'
import { Providers } from '@/redux/Providers'
import Box from '@mui/material/Box'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SchedulePro | Organiza tus citas fácilmente',
	description:
		'SchedulePro es una herramienta eficiente y moderna para agendar citas personales y profesionales. Optimiza tu tiempo con nuestra interfaz intuitiva.',
	applicationName: 'SchedulePro',
	keywords: [
		'agenda',
		'citas',
		'calendar',
		'gestión del tiempo',
		'productividad',
	],
	authors: [
		{ name: 'Tu Nombre o Empresa', url: 'https://tusitio.com' },
	],
	generator: 'Next.js',
	themeColor: '#1976d2',
	colorScheme: 'light dark',
	openGraph: {
		title: 'SchedulePro | Organiza tus citas fácilmente',
		description:
			'Agenda tus reuniones de forma rápida, visual y sencilla con SchedulePro.',
		url: 'https://tusitio.com', // cámbialo por tu dominio real
		siteName: 'SchedulePro',
		locale: 'es_ES',
		type: 'website',
		images: [
			{
				url: 'https://tusitio.com/og-image.jpg', // imagen representativa para compartir
				width: 1200,
				height: 630,
				alt: 'Imagen de SchedulePro',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SchedulePro | Organiza tus citas fácilmente',
		description:
			'Gestiona tu tiempo de forma inteligente con SchedulePro.',
		images: ['https://tusitio.com/og-image.jpg'],
		creator: '@tucuenta',
	},
	icons: {
		icon: '/favicon.ico',
	},
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</head>
			<ThemeRegistry>
				<body className={inter.className}>
					<QueryProvider>
						<Providers>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									minHeight: '100vh',
								}}
							>
								<Header />
								<Box
									component="main"
									sx={{
										flex: 1,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexDirection: 'column',
										overflow: 'hidden',
									}}
								>
									{children}
								</Box>
								<Footer />
							</Box>
						</Providers>
					</QueryProvider>
				</body>
			</ThemeRegistry>
		</html>
	)
}
