import { Barber } from '@/models/barber'
import { mockBarber } from '@/data/barber'

/* import apiClient from './apiClient'

export const getUser = async (userId: string) => {
	const response = await apiClient.get(`/users/${userId}`)
	return response.data
}
 */

export const fetchBarber = async (
	barberId: string
): Promise<Barber> => {
	try {
		// Simular un retardo para imitar una llamada a una API
		await new Promise((resolve) => setTimeout(resolve, 500))
		const barber = mockBarber.find((b) => b.id === barberId)
		if (barber) {
			return barber
		}
		throw new Error('Barbero no encontrado')
	} catch (error) {
		console.error('Error al obtener el barbero:', error)
		throw new Error('No se pudo obtener el barbero')
	}
}
