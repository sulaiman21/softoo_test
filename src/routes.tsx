import { CartPage, HomePage } from "./pages";

type Route = {
	path: string;
	element: React.ReactNode;
};

export const routes: Route[] = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/carts",
		element: <CartPage />,
	},
];
