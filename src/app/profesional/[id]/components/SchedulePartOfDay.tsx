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
}: SchedulePartOfDayProps) => (
	<Box>
		<Typography variant="body1" gutterBottom>
			{partOfDay}
		</Typography>
		<hr />
		<List>
			{schedule.times.filter(filterFn).map((time) => (
				<ListItem key={time.id}>
					<ListItemButton>{time.time}</ListItemButton>
				</ListItem>
			))}
		</List>
	</Box>
)
