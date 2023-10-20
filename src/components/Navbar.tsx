import { AppBar, Toolbar, Typography } from "@mui/material";
import CartButton from "./CartButton";
import React from "react";
import { useAppSelect } from "../hooks/useRedux";

const Navbar: React.FC = () => {
	const { items = [] } = useAppSelect((state) => state.carts);
	const cartItemsCount = items.reduce(
		(pre, curr) => (pre || 0) + curr.count,
		0
	);
	return (
		<AppBar position="fixed" elevation={0}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Typography>Test for Softoo</Typography>
				<CartButton to="/carts">Cart Items ( {cartItemsCount} )</CartButton>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
