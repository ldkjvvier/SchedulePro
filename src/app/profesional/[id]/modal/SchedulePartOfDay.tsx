import { useShoppingCartActions } from '@/hooks/useShoppingCartActions'
import { PartOfDay, Schedule, ScheduleTime } from '@/models/Schedule'
import { Box, Typography, Button } from '@mui/material'
import { useState } from 'react'
import Grid from '@mui/material/Grid2'

interface SchedulePartOfDayProps {
	schedule: Schedule
	partOfDay: PartOfDay
	filterFn: (time: ScheduleTime) => boolean
}

export const SchedulePartOfDay = ({
	schedule,
	partOfDay,
	filterFn,
}: SchedulePartOfDayProps) => {
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const times = schedule.times.filter(filterFn)
	const { addAppointmentToCart } = useShoppingCartActions()

	const handleAddAppointment = (time: ScheduleTime): void => {
		addAppointmentToCart(time.time, schedule.date)
		setSelectedId(time.id)
	}

	if (times.length === 0) return null

	const getButtonStyles = (time: ScheduleTime) => {
		const isSelected = selectedId === time.id
		const isDisabled = time.isBooked

		return {
			width: '100%',
			minWidth: '100px',
			padding: '8px 12px',
			textAlign: 'center',
			justifyContent: 'center',
			backgroundColor: isDisabled
				? '#f5f5f5'
				: isSelected
				? '#90caf9'
				: '#ffffff',
			color: isDisabled
				? '#bdbdbd'
				: isSelected
				? '#1565c0'
				: '#000000',
			border: '1px solid',
			borderRadius: '8px',
			borderColor: isDisabled
				? '#e0e0e0'
				: isSelected
				? '#42a5f5'
				: '#90caf9',
			'&:hover': {
				backgroundColor: isDisabled
					? '#f5f5f5'
					: isSelected
					? '#64b5f6'
					: '#e3f2fd',
			},
		}
	}

	return (
		<Box>
			<Typography variant="body1" gutterBottom>
				{partOfDay}
			</Typography>
			<hr style={{ borderColor: '#e0e0e0', marginBottom: '16px' }} />
			<Grid
				container
				spacing={{ xs: 2, md: 2 }}
				columns={{ xs: 1, sm: 1, md: 1 }}
				paddingY={2}
			>
				{times.map((time) => (
					<Grid key={time.id}>
						<Button
							disabled={time.isBooked}
							onClick={() => handleAddAppointment(time)}
							sx={getButtonStyles(time)}
						>
							{time.time}
						</Button>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
