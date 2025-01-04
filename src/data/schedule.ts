import { Schedule } from '@/models/barber'

export const mockSchedule: { [barberId: string]: Schedule[] } = {
	'1': [
		{
			date: new Date().toISOString().split('T')[0], // Fecha de hoy
			times: [
				{
					id: '1-1-1',
					time: '09:00',
					isBooked: false,
					partOfDay: 'Mañana',
				},
				{
					id: '1-1-2',
					time: '10:00',
					isBooked: false,
					partOfDay: 'Mañana',
				},
				{
					id: '1-1-3',
					time: '11:00',
					isBooked: true,
					partOfDay: 'Mañana',
				},
			],
		},
		{
			date: new Date(new Date().setDate(new Date().getDate() + 1))
				.toISOString()
				.split('T')[0], // Fecha de mañana
			times: [
				{
					id: '1-2-1',
					time: '13:00',
					isBooked: false,
					partOfDay: 'Tarde',
				},
				{
					id: '1-2-2',
					time: '14:00',
					isBooked: true,
					partOfDay: 'Tarde',
				},
			],
		},
	],
	'2': [
		{
			date: new Date().toISOString().split('T')[0], // Fecha de hoy
			times: [
				{
					id: '2-1-1',
					time: '10:30',
					isBooked: false,
					partOfDay: 'Mañana',
				},
				{
					id: '2-1-2',
					time: '12:00',
					isBooked: false,
					partOfDay: 'Mañana',
				},
			],
		},
		{
			date: new Date(new Date().setDate(new Date().getDate() + 1))
				.toISOString()
				.split('T')[0], // Fecha de mañana
			times: [
				{
					id: '2-2-1',
					time: '15:00',
					isBooked: true,
					partOfDay: 'Tarde',
				},
				{
					id: '2-2-2',
					time: '16:00',
					isBooked: false,
					partOfDay: 'Tarde',
				},
				{
					id: '2-2-3',
					time: '17:00',
					isBooked: false,
					partOfDay: 'Tarde',
				},
			],
		},
	],
}
