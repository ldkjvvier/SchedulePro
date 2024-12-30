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

	return (
		<div className="tw-flex tw-items-center tw-justify-center tw-bg-secondary tw-w-full tw-h-full tw-text-black">
			<Box className="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-w-[80%] tw-h-[80%]">
				<Box className="tw-w-full tw-h-full tw-rounded-md tw-bg-primary tw-shadow-md tw-p-4">
					<Typography variant="subtitle1" gutterBottom>
						Selecciona una fecha
					</Typography>
					<DateCarouselCalendar
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						onSelectDate={handleSelectDate}
					/>
					{selectedDate && (
						<div>
							<Typography variant="subtitle1" gutterBottom>
								Horarios disponibles para{' '}
								{selectedDate.toISOString().split('T')[0]}:
							</Typography>
							{isLoading && <p>Cargando horarios...</p>}
							{error && (
								<p>Error al cargar los horarios: {error.message}</p>
							)}
							{schedule && (
								<List>
									{schedule.times.map((time) => (
										<ListItem key={time}>
											<ListItemButton>{time}</ListItemButton>
										</ListItem>
									))}
								</List>
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
