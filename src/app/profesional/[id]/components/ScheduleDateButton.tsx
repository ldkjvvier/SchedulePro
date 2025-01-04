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
				{partOfDay}
			</Typography>
			<hr />
			<List
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 2,
					padding: 0,
					margin: 2,
				}}
			>
				{filteredTimes.map((time) => (
					<ListItem
						key={time.id}
						sx={{
							width: 'auto',
							padding: 0,
						}}
					>
						<ListItemButton
							disabled={time.isBooked}
							sx={{
								minWidth: '80px', // Asegura que todos los botones tengan el mismo tamaño mínimo
								textAlign: 'center',
								justifyContent: 'center',
								padding: '8px 16px',
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
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}
