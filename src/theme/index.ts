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
		bw: {
			black: "#000000",
			blackLight: "#222122",
			white: "#ffffff",
			grey: "#E8E8E8",
			greyLight: "#00000080",
			greyLightest: "#000000BF",
			backgroundColor: "#F7F7F7",
			blackLightest: "#00000040",
			green: "#7CC08B",
			greybtn: "#DCDCDC",
		},
		primary: {
			light: "#757ce8",
			main: "#EC1E26",
			dark: "#002884",
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
