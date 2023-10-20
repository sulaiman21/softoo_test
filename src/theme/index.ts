import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
	typography: {
		fontSize: 12,
		fontWeightBold: 700,
		fontWeightMedium: 600,
		fontWeightLight: 500,
		fontWeightRegular: 400,
	},
	palette: {
		primary: {
			light: "#42a5f5",
			main: "#1976d2",
			dark: "#1565c0",
		},
		secondary: {
			light: "#004F70",
			main: "#004F70",
			dark: "#004F70",
		},
	},
	shape: {
		borderRadius: 8,
	},
	spacing: 2,
});

export default defaultTheme;
