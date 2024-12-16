import { Barber } from '@/app/models/barber'

/* import apiClient from './apiClient'

export const getUser = async (userId: string) => {
	const response = await apiClient.get(`/users/${userId}`)
	return response.data
}
 */
const mockBarber: Barber[] = [
	{
		id: '1',
		name: 'Havuer Barber',
		email: 'john.barber@example.com',
		image: 'https://example.com/images/john-barber.jpg', // URL de imagen de perfil
		specialties: [
			'Cortes clásicos',
			'Barbas estilo moderno',
			'Cortes fade',
		], // Especialidades
		availability: {
			monday: '9:00 AM - 5:00 PM',
			tuesday: '9:00 AM - 5:00 PM',
			wednesday: 'Cerrado',
			thursday: '9:00 AM - 5:00 PM',
			friday: '9:00 AM - 6:00 PM',
			saturday: '10:00 AM - 4:00 PM',
			sunday: 'Cerrado',
		}, // Disponibilidad por día
		bio: 'John es un barbero con más de 10 años de experiencia, especializado en cortes clásicos y tendencias modernas. Con una pasión por la precisión, asegura que cada cliente salga satisfecho.',
		contactNumber: '+1 (555) 123-4567', // Teléfono de contacto
	},
	{
		id: '2',
		name: 'John Barber',
		email: 'john.barber@example.com',
		image: 'https://example.com/images/john-barber.jpg', // URL de imagen de perfil
		specialties: [
			'Cortes clásicos',
			'Barbas estilo moderno',
			'Cortes fade',
		], // Especialidades
		availability: {
			monday: '9:00 AM - 5:00 PM',
			tuesday: '9:00 AM - 5:00 PM',
			wednesday: 'Cerrado',
			thursday: '9:00 AM - 5:00 PM',
			friday: '9:00 AM - 6:00 PM',
			saturday: '10:00 AM - 4:00 PM',
			sunday: 'Cerrado',
		}, // Disponibilidad por día
		bio: 'John es un barbero con más de 10 años de experiencia, especializado en cortes clásicos y tendencias modernas. Con una pasión por la precisión, asegura que cada cliente salga satisfecho.',
		contactNumber: '+1 (555) 123-4567', // Teléfono de contacto
	},
]

export const getBarber = async (
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
