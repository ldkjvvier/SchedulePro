export interface Schedule {
	date: string
	times: ScheduleTime[]
}
export interface ScheduleTime {
	id: string
	time: string
	isBooked: boolean
	partOfDay: PartOfDay
}
export type PartOfDay = 'Mañana' | 'Tarde' | 'Noche'
