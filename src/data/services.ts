import { BarberService } from '@/models/barber'

export const mockServices: BarberService[] = [
	{
		barberId: '1',
		services: [
			{
				id: '1',
				name: 'Corte Clásico',
				price: 20000,
				duration: '30 minutos',
				description:
					'Un corte de cabello clásico con estilo profesional que incluye detalles y acabado limpio.',
			},
			{
				id: '2',
				name: 'Afeitado Clásico',
				price: 15000,
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
				price: 25000,
				duration: '45 minutos',
				description:
					'Corte moderno con degradado preciso y transiciones suaves, adaptado a tu estilo personal.',
			},
			{
				id: '4',
				name: 'Ajuste de Barba',
				price: 18000,
				duration: '25 minutos',
				description:
					'Moldeado y recorte de barba para un look impecable y bien definido.',
			},
			{
				id: '5',
				name: 'Tratamiento Capilar',
				price: 30000,
				duration: '40 minutos',
				description:
					'Tratamiento hidratante y revitalizante para mantener el cabello saludable y brillante.',
			},
		],
	},
]
