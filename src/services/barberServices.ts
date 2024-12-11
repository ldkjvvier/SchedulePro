const mockServices = [
	{
		barberId: '1',
		services: [
			{
				id: '1',
				name: 'Corte Clásico',
				price: 20.0,
				duration: '30 minutos',
				description:
					'Un corte de cabello clásico con estilo profesional que incluye detalles y acabado limpio.',
			},
			{
				id: '2',
				name: 'Afeitado Clásico',
				price: 15.0,
				duration: '20 minutos',
				description:
					'Afeitado al ras con toallas calientes y productos de alta calidad para un acabado perfecto.',
			},
		],
	},
	{
		barberId: '2',
		services: [
			{
				id: '3',
				name: 'Corte Fade',
				price: 25.0,
				duration: '45 minutos',
				description:
					'Corte moderno con degradado preciso y transiciones suaves, adaptado a tu estilo personal.',
			},
			{
				id: '4',
				name: 'Ajuste de Barba',
				price: 18.0,
				duration: '25 minutos',
				description:
					'Moldeado y recorte de barba para un look impecable y bien definido.',
			},
			{
				id: '5',
				name: 'Tratamiento Capilar',
				price: 30.0,
				duration: '40 minutos',
				description:
					'Tratamiento hidratante y revitalizante para mantener el cabello saludable y brillante.',
			},
		],
	},
]

export const getBarberServices = async (barberId: string) => {
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
