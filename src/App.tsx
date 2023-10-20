import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import theme from "./theme";
import { store } from "./libs";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
	const content = useRoutes(routes);
	return (
		<HelmetProvider>
			<Helmet title="Softoo Test" />
			<Provider store={store}>
				<ThemeProvider theme={theme}>{content}</ThemeProvider>
			</Provider>
		</HelmetProvider>
	);
};

export default App;
