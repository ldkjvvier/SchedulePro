// src/services/barberSchedule.ts

import { mockSchedule } from '@/data/schedule'
import { Schedule } from '@/models/barber'

export const fetchBarberSchedule = async (
	barberId: string,
	date: string
): Promise<Schedule | null> => {
	try {
		// Simular retardo
		await new Promise((resolve) => setTimeout(resolve, 500))

		// Obtener horarios del barbero específico
		const barberSchedules = mockSchedule[barberId]

		if (!barberSchedules) {
			return null
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
