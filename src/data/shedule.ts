// src/data/schedule.ts

import { Schedule } from '@/models/barber'

export const mockSchedule: { [barberId: string]: Schedule[] } = {
	'1': [
		{
			date: new Date().toISOString().split('T')[0],
			times: ['9:00 AM', '10:00 AM', '11:00 AM'],
		},
		{
			date: new Date(new Date().setDate(new Date().getDate() + 1))
				.toISOString()
				.split('T')[0],
			times: ['1:00 PM', '2:00 PM'],
		},
	],
	'2': [
		{
			date: new Date().toISOString().split('T')[0],
			times: ['10:30 AM', '12:00 PM'],
		},
		{
			date: new Date(new Date().setDate(new Date().getDate() + 1))
				.toISOString()
				.split('T')[0],
			times: ['3:00 PM', '4:00 PM', '5:00 PM'],
		},
	],
}
