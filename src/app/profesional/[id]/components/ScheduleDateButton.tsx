import { PartOfDay, Schedule, ScheduleTime } from '@/models/barber'
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemButton,
} from '@mui/material'

export const ScheduleDateButton = ({
	schedule,
	partOfDay,
}: {
	schedule: Schedule
	partOfDay: PartOfDay
}) => {
	const filterTimesByPartOfDay = (
		times: ScheduleTime[],
		partOfDay: PartOfDay
	) => {
		return times.filter((time) => time.partOfDay === partOfDay)
	}

	// Filtramos los horarios según la parte del día
	const filteredTimes = filterTimesByPartOfDay(
		schedule.times,
		partOfDay
	)

	return (
		<Box>
			<Typography variant="body1" gutterBottom>
				{partOfDay} {/* Esto muestra 'Mañana', 'Tarde' o 'Noche' */}
			</Typography>
			<hr />
			<List>
				{filteredTimes.map((time) => (
					<ListItem
						key={time.id}
						sx={{
							'&:hover': {
								backgroundColor: time.isBooked
									? 'transparent'
									: '#f0f0f0',
							},
							borderColor: time.isBooked ? 'red' : 'transparent',
							borderWidth: '1px',
						}}
					>
						<ListItemButton disabled={time.isBooked}>
							{time.time}
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}
