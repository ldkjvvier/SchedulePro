import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'

export const Footer: React.FC = () => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: 'Background.paper',
				padding: theme.spacing(2),
				boxShadow: `0 -2px 5px ${theme.palette.grey[400]}`,
				zIndex: 10,
			}}
		>
			{/* Credit Text */}
			<Typography variant="subtitle2" color="text.secondary">
				Desarrollado por SchedulePro
			</Typography>
		</Box>
	)
}
