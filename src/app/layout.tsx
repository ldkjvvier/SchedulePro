import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './components/themeRegistry'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ShedulePro',
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
					<main className="tw-flex tw-flex-1 tw-justify-between tw-min-h-screen tw-flex-col tw-bg-transparent">
						<Header />

						{children}
						<Footer />
					</main>
				</body>
			</ThemeRegistry>
		</html>
	)
}
