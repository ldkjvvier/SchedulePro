import { useSelector } from 'react-redux'
import { ShoppingCart } from '@/models/shoppingCart'

export const useShoppingCart = () => {
	const cart = useSelector(
		(state: { shoppingCart: { cart: ShoppingCart } }) =>
			state.shoppingCart.cart
	)

	return cart
}
