import { mockBarber } from '@/data/barber'
import { BarberSummary } from '@/models/barber'

export const fetchBarberList = async (): Promise<BarberSummary[]> => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 500))
		return mockBarber.map((barber) => ({
			id: barber.id,
			name: barber.name,
			image: barber.image,
			specialty: barber.specialties[0],
			biography: barber.bio.split('.')[0],
		}))
	} catch (error) {
		console.error('Error al obtener la lista de barberos:', error)
		throw new Error('No se pudo obtener la lista de barberos')
	}
}
