import { useDispatch } from 'react-redux'
import {
	addBarberAndService,
	addAppointment,
} from '@/redux/features/shoppingCartSlice'
import { Barber } from '@/models/barber'
import { Service } from '@/models/Service'

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

	const addAppointmentToCart = (time: string, date: string) => {
		dispatch(
			addAppointment({
				time,
				date,
			})
		)
	}

	return {
		addToCart,
		addAppointmentToCart,
	}
}
