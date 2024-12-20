'use client'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Drawer from '@mui/material/Drawer'
import Image from 'next/image'

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const navLinks = [
		{
			title: 'Inicio',
			url: '/',
		},
		{
			title: 'Servicios',
			url: '/services',
		},
		{
			title: 'Contacto',
			url: '/contact',
		},
	]

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	const Links = () => {
		return (
			<>
				{navLinks.map((link) => (
					<Link key={link.url} href={link.url} passHref>
						<Button
							className="tw-text-text-main hover:tw-bg-secondary hover:tw-text-text-main tw-rounded-lg tw-px-4"
							variant="text"
						>
							{link.title}
						</Button>
					</Link>
				))}
			</>
		)
	}

	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: '#FFFFFF',
			}}
			elevation={0}
		>
			<Toolbar className="tw-justify-between">
				{/* Logo y Nombre */}
				<Link className="tw-flex tw-items-center" href="/">
					<Image
						src="/page_logo.png"
						alt="Barbería Logo"
						width={40}
						height={40}
					/>
					<Typography
						variant="h6"
						className="tw-ml-3 tw-text-text-main tw-text-xl tw-font-semibold"
					>
						ShedulePro
					</Typography>
				</Link>

				{/* Botón de Menú en dispositivos pequeños */}
				<div className="tw-flex lg:tw-hidden">
					<IconButton
						onClick={toggleDrawer}
						className="tw-text-text-main"
					>
						{isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
				</div>

				{/* Navegación en pantallas grandes */}
				<nav className="tw-hidden lg:tw-flex tw-gap-4">
					<Links />
				</nav>
			</Toolbar>

			{/* Drawer para navegación en pantallas pequeñas */}
			<Drawer
				anchor="right"
				open={isDrawerOpen}
				onClose={toggleDrawer}
			>
				<div className="tw-p-4 tw-w-64 tw-bg-primary tw-h-full">
					<Typography
						variant="h6"
						className="tw-mb-4 tw-text-text-main"
					>
						Menú
					</Typography>
					<nav className="tw-flex tw-flex-col tw-gap-4">
						<Links />
					</nav>
				</div>
			</Drawer>
		</AppBar>
	)
}

export default Header
