type BlackAndWhiteSimple = {
	black: string;
	blackLight: string;
	blackLightest: string;
	white: string;
	grey: string;
	greyLight: string;
	greyLightest: string;
	backgroundColor: string;
	green: string;
	greybtn: string;
};

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

	interface Palette {
		bw: BlackAndWhiteSimple;
	}

	interface PaletteOptions {
		bw: BlackAndWhiteSimple;
	}
}

export {};
