export interface Schedule {
	date: Date
	times: ScheduleTime[]
}
export interface ScheduleTime {
	id: string
	time: string
	isBooked: boolean
	partOfDay: PartOfDay
}
export type PartOfDay = 'Mañana' | 'Tarde' | 'Noche'
