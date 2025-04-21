'use client'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Drawer from '@mui/material/Drawer'
import Image from 'next/image'
import Box from '@mui/material/Box'
import HeaderBase from './HeaderBase'

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const navLinks = [
		{ title: 'Inicio', url: '/' },
		{ title: 'Servicios', url: '/services' },
		{ title: 'Contacto', url: '/contact' },
	]

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		<HeaderBase>
			<Link href="/" passHref>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						textDecoration: 'none',
					}}
				>
					<Image
						src="/page_logo.png"
						alt="Barbería Logo"
						width={40}
						height={40}
					/>
					<Typography
						variant="h6"
						sx={{
							ml: 2,
							color: 'text.primary',
							fontSize: '1.25rem',
							fontWeight: 600,
						}}
					>
						SchedulePro
					</Typography>
				</Box>
			</Link>

			<Box sx={{ display: { xs: 'flex', lg: 'none' }, ml: 'auto' }}>
				<IconButton
					onClick={toggleDrawer}
					sx={{ color: 'text.primary' }}
				>
					{isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</Box>

			<Box
				component="nav"
				sx={{
					display: { xs: 'none', lg: 'flex' },
					gap: 2,
					ml: 'auto',
				}}
			>
				{navLinks.map((link) => (
					<Link key={link.url} href={link.url} passHref>
						<Button
							variant="text"
							sx={{
								color: 'text.primary',
								borderRadius: 2,
								px: 2,
								'&:hover': {
									backgroundColor: 'secondary.main',
									color: 'text.primary',
								},
							}}
						>
							{link.title}
						</Button>
					</Link>
				))}
			</Box>

			<Drawer
				anchor="right"
				open={isDrawerOpen}
				onClose={toggleDrawer}
			>
				<Box
					sx={{
						p: 2,
						width: 256,
						height: '100%',
						backgroundColor: 'primary.main',
					}}
				>
					<Typography
						variant="h6"
						sx={{
							mb: 2,
							color: 'text.primary',
						}}
					>
						Menú
					</Typography>
					{navLinks.map((link) => (
						<Link key={link.url} href={link.url} passHref>
							<Button
								variant="text"
								fullWidth
								sx={{
									justifyContent: 'flex-start',
									color: 'text.primary',
									mb: 1,
								}}
							>
								{link.title}
							</Button>
						</Link>
					))}
				</Box>
			</Drawer>
		</HeaderBase>
	)
}

export default Header
