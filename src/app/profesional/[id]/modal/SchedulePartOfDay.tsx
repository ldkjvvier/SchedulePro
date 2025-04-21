import { useShoppingCartActions } from '@/hooks/useShoppingCartActions'
import { Schedule, ScheduleTime } from '@/models/Schedule'
import { Box, Typography, Button, Grid } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useEffect, useState } from 'react'
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
			padding: '6px 10px',
			textAlign: 'center',
			justifyContent: 'center',
			fontSize: '0.9rem',
			borderRadius: '8px',
			border: '1px solid',
			transition: 'all 0.3s ease',

			// Colores según estado
			backgroundColor: isDisabled
				? 'grey.200'
				: isSelected
				? 'primary.main'
				: 'background.paper',

			color: isDisabled
				? 'grey.500'
				: isSelected
				? 'common.white'
				: 'text.primary',

			borderColor: isDisabled
				? 'grey.300'
				: isSelected
				? 'primary.dark'
				: 'primary.light',

			'&:hover': {
				backgroundColor: isDisabled
					? 'grey.200'
					: isSelected
					? 'primary.dark'
					: 'primary.light',
				color: 'grey.300',
				'& .MuiButton-startIcon': {
					color: 'grey.300',
				},
			},

			'& .MuiButton-startIcon': {
				fontSize: '1.1rem', // Ajuste de tamaño del icono
				color: isSelected ? 'common.white' : 'primary.main',
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
											tabIndex={0}
											startIcon={
												<AccessTimeIcon fontSize="inherit" />
											}
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
