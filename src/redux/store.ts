import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/shoppingCartSlice'

export const store = configureStore({
	reducer: {
		shoppingCart: cartReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
