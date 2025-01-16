import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: '#FFFFFF',
			}}
			elevation={4}
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
						SchedulePro
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	)
}
