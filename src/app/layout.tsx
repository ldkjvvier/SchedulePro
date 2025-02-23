import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './theme/themeRegistry'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import QueryProvider from './components/QueryProvider'
import { Providers } from '@/redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SchedulePro',
	description: 'A simple scheduling app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
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
							<main className="tw-flex tw-flex-1 tw-justify-between tw-min-h-screen tw-flex-col tw-bg-transparent">
								<Header />

								{children}
								<Footer />
							</main>
						</Providers>
					</QueryProvider>
				</body>
			</ThemeRegistry>
		</html>
	)
}
