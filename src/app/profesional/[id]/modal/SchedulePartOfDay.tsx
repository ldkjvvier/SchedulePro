import { useShoppingCartActions } from '@/hooks/useShoppingCartActions'
import { Schedule, ScheduleTime } from '@/models/Schedule'
import { Box, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { useShoppingCart } from '@/hooks/useShoppingCart'

interface ScheduleProps {
	schedule: Schedule
}

const timeRanges = [
	{ label: 'Mañana', start: 6, end: 12 },
	{ label: 'Tarde', start: 12, end: 18 },
	{ label: 'Noche', start: 18, end: 24 },
]

export const SchedulePartOfDay = ({ schedule }: ScheduleProps) => {
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const cart = useShoppingCart()
	console.log(selectedId)
	console.log(schedule)
	const { addAppointmentToCart, clearCartAppointment } =
		useShoppingCartActions()
	const handleAddAppointment = (time: ScheduleTime): void => {
		if (time.isBooked) return
		if (selectedId === time.id) {
			clearCartAppointment()
			setSelectedId(null)
			return
		}
		addAppointmentToCart({ time: time.time, date: schedule.date })
		setSelectedId(time.id)
	}

	useEffect(() => {
		if (cart.appointment) {
			const time = schedule.times.find(
				(time) => time.time === cart.appointment?.time
			)
			if (time) {
				setSelectedId(time.id)
			}
		}
	}, [cart.appointment, schedule.times])

	const getButtonStyles = (time: ScheduleTime) => {
		const isSelected = selectedId === time.id
		const isDisabled = time.isBooked

		return {
			width: '100%',
			minWidth: '80px',
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
		<Box
			sx={{
				maxHeight: '300px',
				minHeight: '150px',
				overflowY: 'auto',
				paddingRight: 1,
				paddingBottom: 10,
				'&::-webkit-scrollbar': {
					width: '8px',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#b0b0b0',
					borderRadius: '4px',
				},
				'&::-webkit-scrollbar-thumb:hover': {
					backgroundColor: '#909090',
				},
				'&::-webkit-scrollbar-track': {
					backgroundColor: '#f0f0f0',
					borderRadius: '4px',
				},
			}}
		>
			{schedule &&
				timeRanges.map(({ label, start, end }) => {
					const times = schedule.times.filter((time) => {
						const hour = new Date(
							`1970-01-01T${time.time}`
						).getHours()
						return hour >= start && hour < end
					})
					if (times.length === 0) return null

					return (
						<Box key={label}>
							<Typography
								variant="body1"
								gutterBottom
								sx={{
									display: 'flex',
									alignItems: 'center',
									'&::after': {
										content: '""',
										flexGrow: 1,
										height: '1px',
										backgroundColor: '#e0e0e0',
										marginLeft: '8px',
									},
								}}
							>
								{label}
							</Typography>
							<Grid container spacing={1} paddingY={2}>
								{times.map((time) => (
									<Grid key={time.id} component="div">
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
				})}
		</Box>
	)
}
