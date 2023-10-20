import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cartListSlice from "./cartList/cartList.slice";
import productSlice from "./productList/product.slice";
import filtersSlice from "./filters/filters.slice";

const logger = createLogger({
	// ADD Additional config
});

const store = configureStore({
	reducer: {
		carts: cartListSlice,
		products: productSlice,
		filters: filtersSlice,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(logger);
	},
	devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
