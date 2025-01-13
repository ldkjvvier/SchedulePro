import React from 'react'
import { format, isBefore, startOfDay } from 'date-fns'
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
	// Se compara la fecha sin tiempo (startOfDay) para asegurar precisión
	const today = startOfDay(new Date())
	const isPastDate = isBefore(startOfDay(date), today)

	return (
		<Box
			onClick={() => !isPastDate && onSelect(date)}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '10px 0',
				width: 40,
				margin: 1,
				cursor: isPastDate ? 'not-allowed' : 'pointer',
				borderRadius: 10,
				transition: 'all 0.3s ease',
				backgroundColor: isPastDate
					? 'rgba(0, 0, 0, 0.1)'
					: 'inherit',
				color: isPastDate ? 'rgba(0, 0, 0, 0.5)' : 'inherit',
				'&:hover': {
					backgroundColor: !isPastDate && 'rgba(0, 0, 0, 0.04)',
				},
				...(isSelected &&
					!isPastDate && {
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
				{format(date, 'EEEE', { locale: es }).slice(0, 3)}
			</Typography>
			<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
				{format(date, 'd')}
			</Typography>
		</Box>
	)
}
