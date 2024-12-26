import { Barber } from '@/models/barber'
export const mockBarber: Barber[] = [
	{
		id: '1',
		name: 'Havuer Barber',
		email: 'john.barber@example.com',
		image: '', // URL de imagen de perfil
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
		image: '/user.png', // URL de imagen de perfil
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
		id: '3',
		name: 'Maria Barber',
		email: 'john.barber@example.com',
		image: '/user.png', // URL de imagen de perfil
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
