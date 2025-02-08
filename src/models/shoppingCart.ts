import { Barber } from './barber'
import { Service } from './Service'

export interface ShoppingCart {
	barber: Pick<Barber, 'id' | 'name' | 'image'>
	service: Pick<Service, 'id' | 'name' | 'price' | 'duration'>
	appointment: Appointment | null
}

export type Appointment = {
	date: Date
	time: string
}
