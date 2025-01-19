import { useShoppingCartActions } from '@/hooks/useShoppingCartActions'
import { PartOfDay, Schedule, ScheduleTime } from '@/models/Schedule'
import { Box, Typography, Button } from '@mui/material'
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
	const times = schedule.times.filter(filterFn)
	const { addAppointmentToCart } = useShoppingCartActions()

	const handleAddAppointment = (time: ScheduleTime): void => {
		addAppointmentToCart(time.time, schedule.date)
	}
	if (times.length === 0) return null

	return (
		<Box>
			<Typography variant="body1" gutterBottom>
				{partOfDay}
			</Typography>
			<hr />
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
								minWidth: '80px', // Asegura que todos los botones tengan el mismo tamaño mínimo
								textAlign: 'center',
								justifyContent: 'center',
								padding: '6px 8px',
								backgroundColor: time.isBooked
									? 'lightgray'
									: 'white',
								border: '1px solid',
								borderRadius: '5px',
								borderColor: time.isBooked ? 'gray' : 'primary.main',
								'&:hover': {
									backgroundColor: time.isBooked
										? 'lightgray'
										: 'primary.light',
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
