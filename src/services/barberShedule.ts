import { mockSchedule } from '@/data/shedule'
import { Schedule } from '@/models/barber'

export const fetchShudule = async (
	barberId: string
): Promise<Schedule> => {
	try {
		// Simular retardo
		await new Promise((resolve) => setTimeout(resolve, 500))
		// Obtener los horarios del barbero por fecha
		const schedule = mockSchedule.find(
			(schedule) => schedule.date === barberId
		)
		if (!schedule) {
			throw new Error('Horarios no encontrados')
		}
		return schedule
	} catch (error) {
		console.error('Error al obtener los horarios del barbero:', error)
		throw new Error('No se pudieron obtener los horarios del barbero')
	}
}
