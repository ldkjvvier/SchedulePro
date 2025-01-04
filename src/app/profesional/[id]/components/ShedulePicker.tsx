import { useState, useEffect } from 'react'
import {
	Typography,
	List,
	ListItem,
	ListItemButton,
	Box,
} from '@mui/material'
import { useBarberShedule } from '@/hooks/useBarberShedule'
import { DateCarouselCalendar } from './DateCarouselCalendar'

export const SchedulePicker: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const {
		data: schedule,
		isLoading,
		error,
		refetch,
	} = useBarberShedule('2', selectedDate.toISOString().split('T')[0])

	useEffect(() => {
		refetch()
	}, [selectedDate, refetch])

	const handleSelectDate = (date: Date): void => {
		setSelectedDate(date)
	}

	// Función para categorizar los horarios en mañana, tarde o noche
	const categorizeTimes = (
		times: { id: string; time: string; isBooked: boolean }[]
	) => {
		const morning: any[] = []
		const afternoon: any[] = []
		const night: any[] = []

		times.forEach((time) => {
			const [hours, minutes] = time.time.split(':').map(Number)
			if (hours >= 6 && hours < 12) {
				morning.push(time)
			} else if (hours >= 12 && hours < 18) {
				afternoon.push(time)
			} else {
				night.push(time)
			}
		})

		return { morning, afternoon, night }
	}

	return (
		<div className="tw-flex tw-items-center tw-justify-center tw-bg-secondary tw-w-full tw-h-full tw-text-black">
			<Box className="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-w-[80%] tw-h-[80%]">
				<Box className="tw-w-[60%] tw-h-full tw-rounded-md tw-bg-primary tw-shadow-md tw-p-4">
					<Typography variant="subtitle1" gutterBottom>
						Selecciona una fecha
					</Typography>
					<DateCarouselCalendar
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						onSelectDate={handleSelectDate}
					/>
					{isLoading && <p>Cargando horarios...</p>}
					{error && (
						<p>Ha ocurrido un error al cargar los horarios</p>
					)}
					{selectedDate && (
						<div>
							<Typography variant="subtitle1" gutterBottom>
								Horarios disponibles para{' '}
								{selectedDate.toISOString().split('T')[0]}:
							</Typography>
							{schedule && (
								<Box>
									<Box>
										<Typography variant="body1" gutterBottom>
											Mañana
										</Typography>
										<hr />
										<List>
											{categorizeTimes(schedule.times).morning.map(
												(time) => (
													<ListItem key={time.id}>
														<ListItemButton disabled={time.isBooked}>
															{time.time}
														</ListItemButton>
													</ListItem>
												)
											)}
										</List>
									</Box>

									<Box>
										<Typography variant="body1" gutterBottom>
											Tarde
										</Typography>
										<hr />
										<List>
											{categorizeTimes(schedule.times).afternoon.map(
												(time) => (
													<ListItem key={time.id}>
														<ListItemButton disabled={time.isBooked}>
															{time.time}
														</ListItemButton>
													</ListItem>
												)
											)}
										</List>
									</Box>

									<Box>
										<Typography variant="body1" gutterBottom>
											Noche
										</Typography>
										<hr />
										<List>
											{categorizeTimes(schedule.times).night.map(
												(time) => (
													<ListItem key={time.id}>
														<ListItemButton disabled={time.isBooked}>
															{time.time}
														</ListItemButton>
													</ListItem>
												)
											)}
										</List>
									</Box>
								</Box>
							)}
						</div>
					)}
				</Box>
				<Box className="md:tw-block tw-hidden tw-w-[40%] tw-h-full tw-rounded-md tw-bg-primary tw-shadow-md tw-p-4">
					<Typography variant="subtitle1" gutterBottom>
						Información del servicio
					</Typography>
					<Box sx={{ p: 2 }} width={'100%'}>
						<Typography variant="subtitle1" gutterBottom>
							Servicio seleccionado
						</Typography>
						<Typography variant="body1" gutterBottom>
							Nombre del servicio
						</Typography>
						<Typography variant="body1" gutterBottom>
							Duración del servicio
						</Typography>
						<Typography variant="body1" gutterBottom>
							Precio del servicio
						</Typography>
					</Box>
				</Box>
			</Box>
		</div>
	)
}
