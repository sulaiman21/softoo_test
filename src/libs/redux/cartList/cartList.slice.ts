import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../productList/product.slice";

export type CART_ITEM = {
	product: Product;
	count: number;
};

type INITIAL_STATE_TYPE = {
	items: CART_ITEM[];
};

const INITIAL_STATE: INITIAL_STATE_TYPE = {
	items: [],
};

const cartListSlice = createSlice({
	name: "cartList",
	initialState: INITIAL_STATE,
	reducers: {
		updateCartList(state, { payload }) {
			state.items = payload;
		},
	},
});

export const { updateCartList } = cartListSlice.actions;
export default cartListSlice.reducer;
