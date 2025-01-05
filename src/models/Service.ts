export interface BarberService {
	barberId: string
	services: Service[]
}

export interface Service {
	id: string
	name: string
	price: number
	duration: string
	description: string
}
