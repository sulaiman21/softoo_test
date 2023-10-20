import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const CartButton = styled(Link)(({ theme }) => ({
	textDecoration: "none",
	fontFamily: theme.typography.fontFamily,
	color: theme.palette.bw.white,
	padding: theme.spacing(1, 3),
}));

export default CartButton;
