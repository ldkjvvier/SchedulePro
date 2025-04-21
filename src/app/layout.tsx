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
	title: 'SchedulePro',
	description: 'Una aplicación sencilla para agendar citas',
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
