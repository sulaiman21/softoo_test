import { Stack, Typography } from "@mui/material";
import React from "react";
import useCart from "../../../hooks/useCart";

const ProdTotalCost: React.FC = () => {
	const { items } = useCart();

	if (!items || !items.length) {
		return <></>;
	}

	const totalPrice = items
		?.map((item) => item.product.price * item.count)
		?.reduce((pre, curr) => {
			return (pre || 0) + curr;
		}, 0)
		?.toFixed(2);
	return (
		<Stack alignItems="flex-end">
			<Typography
				sx={{ marginRight: (theme) => theme.spacing(6) }}
				variant="h6"
				data-testid="total"
			>
				Total: $ {totalPrice}
			</Typography>
		</Stack>
	);
};

export default ProdTotalCost;
