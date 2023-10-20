import {
	setFiltersList,
	setSelectedFilter,
} from "../libs/redux/filters/filters.slice";
import { updateProductList } from "../libs/redux/productList/product.slice";
import { useAppDispatch, useAppSelect } from "./useRedux";

const useFilter = () => {
	const { filters = [], activeFilter = "" } = useAppSelect(
		(state) => state.filters
	);

	const { itemsCopy } = useAppSelect((state) => state.products);

	const dispatch = useAppDispatch();

	const updateFiltersList = (filters: string[] = []) => {
		dispatch(setFiltersList(filters));
	};

	const setActiveFilter = (filter: string = "") => {
		dispatch(setSelectedFilter(filter));
		setProductList(filter);
	};

	const setProductList = (filter: string = "") => {
		if (!filter) {
			return dispatch(updateProductList(itemsCopy));
		}

		const filteredList = itemsCopy.filter(
			(item) => item.colour?.toLocaleLowerCase() === filter.toLocaleLowerCase()
		);

		dispatch(updateProductList(filteredList));
	};

	return {
		filters,
		activeFilter,
		updateFiltersList,
		setActiveFilter,
	};
};

export default useFilter;
