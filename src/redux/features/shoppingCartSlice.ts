import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShoppingCart } from '@/models/shoppingCart'

interface ShoppingCartState {
	cart: Omit<ShoppingCart, 'appointment'> | ShoppingCart | null
}

const initialState: ShoppingCartState = {
	cart: null,
}

const cartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		// Agregar barbero y servicio al carrito
		addBarberAndService(
			state,
			action: PayloadAction<{
				barber: ShoppingCart['barber']
				service: ShoppingCart['service']
			}>
		) {
			state.cart = {
				barber: action.payload.barber,
				service: action.payload.service,
			}
		},

		// Agregar horario al carrito
		addAppointment(
			state,
			action: PayloadAction<ShoppingCart['appointment']>
		) {
			if (state.cart) {
				state.cart = {
					...state.cart,
					appointment: action.payload,
				}
			}
		},

		clearAppointment(state) {
			if (state.cart) {
				state.cart = {
					...state.cart,
					appointment: null,
				}
			}
		},
	},
})

export const {
	addBarberAndService,
	addAppointment,
	clearAppointment,
} = cartSlice.actions
export default cartSlice.reducer
