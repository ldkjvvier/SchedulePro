import { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { useBarberShedule } from '@/hooks/useBarberShedule'
import { DateCarouselCalendar } from './DateCarouselCalendar'
import { ScheduleButton } from './ScheduleButton'

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
					{!error && selectedDate && (
						<div>
							<Typography variant="subtitle1" gutterBottom>
								Horarios disponibles para{' '}
								{selectedDate.toISOString().split('T')[0]}:
							</Typography>
							{schedule && (
								<>
									<ScheduleButton
										schedule={schedule}
										partOfDay="Mañana"
									/>
									<ScheduleButton
										schedule={schedule}
										partOfDay="Tarde"
									/>
									<ScheduleButton
										schedule={schedule}
										partOfDay="Noche"
									/>
								</>
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
