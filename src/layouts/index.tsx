import React from "react";
import { Container } from "@mui/material";

import Navbar from "../components/Navbar";
import HeaderSpace from "../components/HeaderSpace";

type BaseLayoutProps = {
	children: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
	return (
		<Container maxWidth="lg">
			<Navbar />
			<HeaderSpace />
			{props.children}
		</Container>
	);
};

export default BaseLayout;
