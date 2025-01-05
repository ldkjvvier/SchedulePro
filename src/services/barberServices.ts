import { Service } from '@/models/Service'
import { mockServices } from '@/data/services'

export const fetchServices = async (
	barberId: string
): Promise<Service[]> => {
	try {
		// Simular retardo
		await new Promise((resolve) => setTimeout(resolve, 500))
		const barberServices = mockServices.find(
			(s) => s.barberId === barberId
		)
		if (!barberServices) throw new Error('Servicios no encontrados')
		return barberServices.services
	} catch (error) {
		console.error(
			'Error al obtener los servicios del barbero:',
			error
		)
		throw new Error(
			'No se pudieron obtener los servicios del barbero'
		)
	}
}
