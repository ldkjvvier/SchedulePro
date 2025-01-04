import { Schedule } from '@/models/barber'
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
	partOfDay: 'Mañana' | 'Tarde' | 'Noche'
}) => {
	// Función para categorizar los horarios en mañana, tarde o noche
	const categorizeTimes = (
		times: { id: string; time: string; isBooked: boolean }[]
	) => {
		const morning: any[] = []
		const afternoon: any[] = []
		const night: any[] = []

		times.forEach((time) => {
			const [hours] = time.time.split(':').map(Number)
			if (hours >= 6 && hours < 12) {
				morning.push(time)
			} else if (hours >= 12 && hours < 18) {
				afternoon.push(time)
			} else {
				night.push(time)
			}
		})

		return { morning, afternoon, night }
	}

	return (
		<Box>
			<Typography variant="body1" gutterBottom>
				{partOfDay}
			</Typography>
			<hr />
			<List>
				{categorizeTimes(schedule.times).morning.map((time) => (
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
