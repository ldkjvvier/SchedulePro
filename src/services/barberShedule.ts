// src/services/barberSchedule.ts

import { mockSchedule } from '@/data/shedule'
import { Schedule } from '@/models/barber'

export const fetchBarberShedule = async (
	barberId: string,
	date: string
): Promise<Schedule> => {
	try {
		// Simular retardo
		await new Promise((resolve) => setTimeout(resolve, 100))

		// Obtener horarios del barbero específico
		const barberSchedules = mockSchedule[barberId]

		if (!barberSchedules) {
			throw new Error(
				`No se encontraron horarios para el barbero con ID ${barberId}`
			)
		}

		// Buscar horarios por fecha
		const schedule = barberSchedules.find((s) => s.date === date)

		if (!schedule) {
			throw new Error(
				`No se encontraron horarios para la fecha ${date}`
			)
		}

		return schedule
	} catch (error) {
		console.error('Error al obtener los horarios del barbero:', error)
		throw new Error('No se pudieron obtener los horarios del barbero')
	}
}
