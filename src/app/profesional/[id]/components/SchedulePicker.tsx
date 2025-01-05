import { useState, useEffect } from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { useBarberSchedule } from '@/hooks/useBarberSchedule'
import { DateCarouselCalendar } from './DateCarouselCalendar'
import { SchedulePartOfDay } from './SchedulePartOfDay'
import { useShoppingCart } from '@/hooks/useShoppingCart'

export const SchedulePicker: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const cart = useShoppingCart()
	const theme = useTheme()
	const {
		data: schedule,
		isLoading,
		refetch,
	} = useBarberSchedule('2', selectedDate.toISOString().split('T')[0])

	useEffect(() => {
		refetch()
	}, [selectedDate, refetch])

	const handleSelectDate = (date: Date): void => {
		setSelectedDate(date)
	}

	return (
		<div className="tw-flex tw-items-center tw-justify-center tw-bg-secondary tw-w-full tw-h-full tw-text-black">
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					alignItems: 'center',
					justifyContent: 'center',
					gap: 4,
					width: '100%',
					height: '100%',
					padding: theme.spacing(2),
				}}
			>
				{/* Main Schedule Picker */}
				<Box
					sx={{
						width: { xs: '90%', sm: '80%', md: '60%' },
						height: { xs: 'auto', md: '80%' },
						borderRadius: 2,
						boxShadow: theme.shadows[3],
						overflow: 'hidden',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Box
						sx={{
							borderBottom: 1,
							borderColor: 'divider',
							mb: 2,
						}}
					>
						<Typography variant="h6" sx={{ px: 2, py: 1 }}>
							Selecciona una fecha y horario
						</Typography>
					</Box>
					<Box sx={{ padding: theme.spacing(2) }}>
						<Typography variant="h6" gutterBottom>
							{selectedDate.toLocaleString('es-ES', {
								month: 'long',
							})}
						</Typography>
						<DateCarouselCalendar
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
							onSelectDate={handleSelectDate}
						/>
						{isLoading && <Typography>Cargando...</Typography>}
						{selectedDate && (
							<Box>
								{schedule && (
									<>
										<SchedulePartOfDay
											schedule={schedule}
											partOfDay="Mañana"
											filterFn={(time) => {
												const hour = new Date(
													`1970-01-01T${time.time}`
												).getHours()
												return hour >= 6 && hour < 12
											}}
										/>
										<SchedulePartOfDay
											schedule={schedule}
											partOfDay="Tarde"
											filterFn={(time) => {
												const hour = new Date(
													`1970-01-01T${time.time}`
												).getHours()
												return hour >= 12 && hour < 18
											}}
										/>
										<SchedulePartOfDay
											schedule={schedule}
											partOfDay="Noche"
											filterFn={(time) => {
												const hour = new Date(
													`1970-01-01T${time.time}`
												).getHours()
												return hour >= 18 && hour < 24
											}}
										/>
									</>
								)}
							</Box>
						)}
					</Box>
				</Box>

				{/* Service Information */}
				<Box
					sx={{
						display: { xs: 'none', md: 'block' },
						width: { md: '30%' },
						height: '80%',
						borderRadius: 2,
						boxShadow: theme.shadows[3],
						padding: theme.spacing(2),
					}}
				>
					<Typography variant="subtitle1" gutterBottom>
						Información del servicio
					</Typography>
					<Box width="100%">
						<Typography variant="subtitle1" gutterBottom>
							Servicio seleccionado: {cart.service.name}
						</Typography>
						<Typography variant="body1" gutterBottom>
							Nombre del servicio: {cart.service.name}
						</Typography>
						<Typography variant="body1" gutterBottom>
							Duración del servicio: {cart.service.duration}
						</Typography>
						<Typography variant="body1" gutterBottom>
							Precio del servicio: {cart.service.price}
						</Typography>
					</Box>
				</Box>
			</Box>
		</div>
	)
}
