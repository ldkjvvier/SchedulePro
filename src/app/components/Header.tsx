import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
	return (
		<AppBar
			position="static"
			className="tw-bg-primary tw-px-12 tw-border-b tw-border-accent"
			elevation={0}
		>
			<Toolbar className="tw-justify-between">
				{/* Logo y Nombre */}
				<div className="tw-flex tw-items-center">
					<Image
						src="/page_logo.png"
						alt="Barbería Logo"
						width={50}
						height={50}
					/>
					<Typography
						variant="h6"
						className="tw-ml-3 tw-text-text-main tw-text-xl tw-font-semibold"
					>
						ShedulePro
					</Typography>
				</div>

				{/* Navegación */}
				<nav className="tw-flex tw-gap-4">
					<Link href="/" passHref>
						<Button
							className="tw-text-text-main hover:tw-bg-secondary hover:tw-text-text-main tw-rounded-lg tw-px-4"
							variant="text"
						>
							Inicio
						</Button>
					</Link>
					<Link href="/services" passHref>
						<Button
							className="tw-text-text-main hover:tw-bg-secondary hover:tw-text-text-main tw-rounded-lg tw-px-4"
							variant="text"
						>
							Servicios
						</Button>
					</Link>
					<Link href="/contact" passHref>
						<Button
							className="tw-text-text-main hover:tw-bg-secondary hover:tw-text-text-main tw-rounded-lg tw-px-4"
							variant="text"
						>
							Contacto
						</Button>
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	)
}

export default Header
