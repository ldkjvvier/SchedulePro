import { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { useBarberShedule } from '@/hooks/useBarberSchedule'
import { DateCarouselCalendar } from './DateCarouselCalendar'
import { SchedulePartOfDay } from './SchedulePartOfDay'

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
				<Box className="tw-w-[60%] tw-h-full tw-rounded-md tw-bg-primary tw-shadow-md">
					<div className="tw-border-b tw-border-secondary tw-mb-4">
						<Typography variant="h6" sx={{ px: 2, py: 1 }}>
							Selecciona una fecha y horario
						</Typography>
					</div>
					<div className="tw-p-4">
						<Typography variant="h6" gutterBottom>
							{/* MES de la fecha seleccionada */}
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
						{error && <Typography>Error: {error.message}</Typography>}
						{!error && selectedDate && (
							<div>
								<Typography variant="subtitle1" gutterBottom>
									Horarios disponibles para{' '}
									{selectedDate.toISOString().split('T')[0]}:
								</Typography>
								{schedule && (
									<>
										<SchedulePartOfDay
											schedule={schedule}
											partOfDay="Mañana"
											filterFn={(time) => {
												const hour = new Date(
													`1970-01-01T${time}`
												).getHours()
												return hour >= 6 && hour < 12
											}}
										/>
										<SchedulePartOfDay
											schedule={schedule}
											partOfDay="Tarde"
											filterFn={(time) => {
												const hour = new Date(
													`1970-01-01T${time}`
												).getHours()
												return hour >= 12 && hour < 18
											}}
										/>
										<SchedulePartOfDay
											schedule={schedule}
											partOfDay="Noche"
											filterFn={(time) => {
												const hour = new Date(
													`1970-01-01T${time}`
												).getHours()
												return hour >= 18 && hour < 24
											}}
										/>
									</>
								)}
							</div>
						)}
					</div>
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
