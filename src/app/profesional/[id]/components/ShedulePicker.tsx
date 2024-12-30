import { useEffect, useState } from 'react'
import {
	Typography,
	Button,
	List,
	ListItem,
	ListItemButton,
} from '@mui/material'
import { useBarberShedule } from '@/hooks/useBarberShedule'

export const SchedulePicker = () => {
	const [selectedDate, setSelectedDate] = useState<string>(
		new Date().toISOString().split('T')[0]
	)
	const [dates, setDates] = useState<string[]>([])
	const {
		data: schedule,
		isLoading,
		error,
		refetch,
	} = useBarberShedule('1', selectedDate)

	useEffect(() => {
		const generateDates = () => {
			const today = new Date()
			const datesArray = []
			for (let i = 0; i < 7; i++) {
				const date = new Date(today)
				date.setDate(today.getDate() + i)
				datesArray.push(date.toISOString().split('T')[0])
			}
			setDates(datesArray)
		}
		generateDates()
	}, [])

	useEffect(() => {
		refetch()
	}, [selectedDate, refetch])

	const handleSelectDate = (date: string) => {
		setSelectedDate(date)
	}

	return (
		<div className="tw-bg-white tw-w-full tw-h-full tw-text-black">
			<Typography variant="subtitle1" gutterBottom>
				Selecciona una fecha
			</Typography>
			<List>
				{dates.map((date) => (
					<ListItem key={date}>
						<ListItemButton onClick={() => handleSelectDate(date)}>
							{date}
						</ListItemButton>
					</ListItem>
				))}
			</List>
			{selectedDate && (
				<div>
					<Typography variant="subtitle1" gutterBottom>
						Horarios disponibles para {selectedDate}:
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
		</div>
	)
}
