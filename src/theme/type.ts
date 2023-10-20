declare module "@mui/material/styles" {
	interface PaletteColorOptions {
		main: string;
		dark: string;
		light: string;
	}

	interface PaletteColor {
		main: string;
		dark: string;
		light: string;
	}

	interface SimplePaletteColorOptions {
		main: string;
		dark?: string;
		light?: string;
	}

	interface Palette {}

	interface PaletteOptions {}
}

export {};
