import { useDispatch } from 'react-redux'
import {
	addBarberAndService,
	addAppointment,
	clearAppointment,
} from '@/redux/features/shoppingCartSlice'
import { Barber } from '@/models/barber'
import { Service } from '@/models/Service'
import { Appointment } from '@/models/shoppingCart'

export const useShoppingCartActions = () => {
	const dispatch = useDispatch()

	const addToCart = (barber: Barber, service: Service) => {
		dispatch(
			addBarberAndService({
				barber: {
					id: barber.id,
					name: barber.name,
					image: barber.image,
				},
				service: {
					id: service.id,
					name: service.name,
					price: service.price,
					duration: service.duration,
				},
			})
		)
	}

	const addAppointmentToCart = (appointment: Appointment) => {
		dispatch(addAppointment(appointment))
	}

	const clearCartAppointment = (): void => {
		dispatch(clearAppointment())
	}

	return {
		addToCart,
		addAppointmentToCart,
		clearCartAppointment,
	}
}
