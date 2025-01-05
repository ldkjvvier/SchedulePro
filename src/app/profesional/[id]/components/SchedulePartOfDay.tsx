import { PartOfDay, Schedule, ScheduleTime } from '@/models/barber'
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemButton,
} from '@mui/material'

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

	if (times.length === 0) return null

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
				{times.map((time) => (
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