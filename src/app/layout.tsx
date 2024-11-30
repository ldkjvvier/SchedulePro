import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './components/themeRegistry'
import './globals.css'

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
					<main className="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-between tw-p-24">
						{children}
					</main>
				</body>
			</ThemeRegistry>
		</html>
	)
}
