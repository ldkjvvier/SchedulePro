import React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Box, Typography } from '@mui/material'

interface DateItemProps {
	date: Date
	isSelected: boolean
	onSelect: (date: Date) => void
}

export const DateItem: React.FC<DateItemProps> = ({
	date,
	isSelected,
	onSelect,
}) => {
	return (
		<Box
			onClick={() => onSelect(date)}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 2,
				cursor: 'pointer',
				borderRadius: 2,
				transition: 'all 0.3s ease',
				'&:hover': {
					backgroundColor: 'rgba(0, 0, 0, 0.04)',
				},
				...(isSelected && {
					backgroundColor: 'primary.main',
					color: 'primary.contrastText',
					boxShadow: 3,
					'&:hover': {
						backgroundColor: 'primary.dark',
					},
				}),
			}}
		>
			<Typography
				variant="caption"
				sx={{ textTransform: 'capitalize' }}
			>
				{format(date, 'EEEE', { locale: es })}
			</Typography>
			<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
				{format(date, 'd')}
			</Typography>
			<Typography
				variant="body2"
				sx={{ textTransform: 'capitalize' }}
			>
				{format(date, 'MMMM', { locale: es })}
			</Typography>
		</Box>
	)
}
