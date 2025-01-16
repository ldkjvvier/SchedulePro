import React from 'react'
import { Box, Typography, Button, useTheme } from '@mui/material'

interface FooterProps {
	onNext: () => void
}

export const Footer: React.FC<FooterProps> = ({ onNext }) => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: theme.palette.background.paper,
				padding: theme.spacing(2),
				boxShadow: `0 -2px 5px ${theme.palette.grey[400]}`,
				zIndex: 10,
			}}
		>
			{/* Credit Text */}
			<Typography variant="subtitle2" color="text.secondary">
				Desarrollado por SchedulePro
			</Typography>

			{/* Next Button */}
			<Button
				variant="contained"
				color="primary"
				onClick={onNext}
				sx={{
					minWidth: '120px',
				}}
			>
				Siguiente
			</Button>
		</Box>
	)
}
