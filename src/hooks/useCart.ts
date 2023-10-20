import { updateCartList } from "../libs/redux/cartList/cartList.slice";
import { CART_ITEM } from "../libs/redux/cartList/cartList.slice";
import { Product } from "../libs/redux/productList/product.slice";
import { useAppDispatch, useAppSelect } from "./useRedux";

const useCart = () => {
	const { items = [] } = useAppSelect((state) => state.carts);
	const dispatch = useAppDispatch();

	const findCartItemIndex = (cartList: CART_ITEM[], product: Product) => {
		const indexOfcartItem = cartList.findIndex(
			(prod) => prod?.product?.id === product.id
		);

		return indexOfcartItem;
	};

	const addCartItem = (product: Product) => {
		// find if the product is already exists in the list
		const cartItemsCopy = [...items];
		const indexOfcartItem = findCartItemIndex(cartItemsCopy, product);

		if (indexOfcartItem !== -1) {
			// product is already exists, just increase the counter
			const existedCartItem = { ...cartItemsCopy[indexOfcartItem] };
			existedCartItem.count += 1;
			cartItemsCopy[indexOfcartItem] = existedCartItem;

			return dispatch(updateCartList(cartItemsCopy));
		}

		cartItemsCopy.push({
			product,
			count: 1,
		});

		dispatch(updateCartList(cartItemsCopy));
	};

	const removeCartItem = (product: Product) => {
		const cartItemsCopy = [...items];
		const indexOfcartItem = findCartItemIndex(cartItemsCopy, product);

		if (indexOfcartItem !== -1) {
			// product exists
			const existedCartItem = { ...cartItemsCopy[indexOfcartItem] };
			// check if the counter is not equal to zero
			if (existedCartItem.count > 0) {
				// remove one item
				existedCartItem.count -= 1;
				cartItemsCopy[indexOfcartItem] = existedCartItem;
			}

			if (existedCartItem.count <= 0) {
				// remove the item
				cartItemsCopy.splice(indexOfcartItem, 1);
			}

			return dispatch(updateCartList(cartItemsCopy));
		}
	};

	return { items, addCartItem, removeCartItem };
};

export default useCart;
