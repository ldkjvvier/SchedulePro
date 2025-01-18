import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { SxProps, Theme } from '@mui/system'

interface HeaderBaseProps {
	children?: React.ReactNode
	sx?: SxProps<Theme>
}

const HeaderBase: React.FC<HeaderBaseProps> = ({ children, sx }) => {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: '#FFFFFF',
				borderBottom: '1px solid #E0E0E0',
				...sx,
				zIndex: 1000,
			}}
		>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
				}}
			>
				{children}
			</Toolbar>
		</AppBar>
	)
}

export default HeaderBase
