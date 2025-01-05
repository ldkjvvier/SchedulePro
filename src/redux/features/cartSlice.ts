import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
	id: string
	name: string
	price: number
	quantity: number
}

interface CartState {
	items: Product[]
}

const initialState: CartState = {
	items: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const existingProduct = state.items.find(
				(item) => item.id === action.payload.id
			)
			if (existingProduct) {
				existingProduct.quantity += action.payload.quantity
			} else {
				state.items.push(action.payload)
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			)
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
