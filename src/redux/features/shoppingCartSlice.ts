import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShoppingCart } from '@/models/shoppingCart'

const initialState: { cart: ShoppingCart | null } = {
	cart: null,
}

const cartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<ShoppingCart>) {
			state.cart = action.payload
		},
		removeFromCart(state) {
			state.cart = null
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
