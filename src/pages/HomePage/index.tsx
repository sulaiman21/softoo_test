import React, { useEffect } from "react";
import BaseLayout from "../../layouts";
import { useAppDispatch, useAppSelect } from "../../hooks/useRedux";
import { getProductList } from "../../libs/redux/productList/product.actions";
import { Typography } from "@mui/material";
import Filters from "../../components/Filters";
import RenderListItems from "./components/RenderListItems";

const HomePage: React.FC = () => {
	const { loading, items } = useAppSelect((state) => state.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProductList());
	}, [dispatch]);

	return (
		<BaseLayout>
			{loading ? (
				<Typography data-testid="loading">Loading...</Typography>
			) : (
				<>
					<Filters />
					<RenderListItems items={items} />
				</>
			)}
		</BaseLayout>
	);
};

export default HomePage;
