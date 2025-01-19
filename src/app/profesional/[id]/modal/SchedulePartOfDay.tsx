import { useShoppingCartActions } from '@/hooks/useShoppingCartActions'
import { PartOfDay, Schedule, ScheduleTime } from '@/models/Schedule'
import { Box, Typography, Button } from '@mui/material'
import { useState } from 'react'
import Grid from '@mui/material/Grid2' // Importa Grid2
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
							sx={{
								width: '100%', // Asegura que ocupe todo el ancho disponible
								minWidth: '100px',
								padding: '8px 12px',
								textAlign: 'center',
								justifyContent: 'center',
								backgroundColor: time.isBooked
									? '#f5f5f5' // Gris claro para deshabilitados
									: selectedId === time.id
									? '#90caf9' // Azul claro para seleccionado
									: '#ffffff', // Blanco para no seleccionado
								color: time.isBooked
									? '#bdbdbd' // Gris oscuro para texto deshabilitado
									: selectedId === time.id
									? '#1565c0' // Azul oscuro para texto seleccionado
									: '#000000', // Negro para texto no seleccionado
								border: '1px solid',
								borderRadius: '8px',
								borderColor: time.isBooked
									? '#e0e0e0' // Gris claro para deshabilitado
									: selectedId === time.id
									? '#42a5f5' // Azul medio para seleccionado
									: '#90caf9', // Azul claro para no seleccionado
								'&:hover': {
									backgroundColor: time.isBooked
										? '#f5f5f5'
										: selectedId === time.id
										? '#64b5f6' // Azul más brillante al hacer hover
										: '#e3f2fd', // Azul muy claro para hover general
								},
							}}
						>
							{time.time}
						</Button>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
