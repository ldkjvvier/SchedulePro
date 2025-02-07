import React from 'react'
import { format, isBefore, startOfDay } from 'date-fns'
import { es } from 'date-fns/locale'
import { Box, Typography, useTheme } from '@mui/material'

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
	const theme = useTheme()
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
				padding: theme.spacing(1.5),
				width: 50,
				margin: theme.spacing(1),
				cursor: isPastDate ? 'not-allowed' : 'pointer',
				borderRadius: theme.shape.borderRadius,
				transition: theme.transitions.create('background-color', {
					duration: theme.transitions.duration.short,
				}),

				backgroundColor: isPastDate
					? theme.palette.action.disabledBackground
					: 'inherit',
				color: isPastDate
					? theme.palette.text.secondary
					: theme.palette.text.primary,

				boxShadow:
					isSelected && !isPastDate ? theme.shadows[3] : 'none',

				'&:hover': {
					backgroundColor: !isPastDate && theme.palette.action.hover,
				},

				...(isSelected &&
					!isPastDate && {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
						'&:hover': {
							backgroundColor: theme.palette.primary.dark,
						},
					}),
			}}
		>
			<Typography
				variant="caption"
				sx={{ textTransform: 'capitalize', fontWeight: '600' }}
			>
				{format(date, 'EEEE', { locale: es }).slice(0, 3)}
			</Typography>
			<Typography
				variant="h6"
				sx={{ fontWeight: '700', fontSize: '16px' }}
			>
				{format(date, 'd')}
			</Typography>
		</Box>
	)
}
