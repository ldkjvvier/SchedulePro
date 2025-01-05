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
			<List>
				{times.map((time) => (
					<ListItem key={time.id}>
						<ListItemButton>{time.time}</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}
