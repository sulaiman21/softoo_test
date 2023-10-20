import { Provider } from "react-redux";
import { cleanup, render, screen } from "@testing-library/react";
import Filters from "../components/Filters";
import { store } from "../libs";

afterEach(cleanup);

describe("Filters Component", () => {
	test("renders with default values", async () => {
		render(
			<Provider store={store}>
				<Filters />
			</Provider>
		);

		const filters = screen.getByTestId("filter-select");
		expect(filters).toBeInTheDocument();
	});

	test("click on filters menu", () => {
		render(
			<Provider store={store}>
				<Filters />
			</Provider>
		);

		const filters = screen.getByTestId("filter-select");
		filters.click();

		const clearFilter = screen.queryByTestId("clear_filter");
		expect(clearFilter).not.toBeInTheDocument();
	});

	// test("updates the active filter when an option is selected", async () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<Filters />
	// 		</Provider>
	// 	);

	// 	// Find the select element and change its value
	// 	const selectElement = screen.getByTestId("filter-select-input");
	// 	fireEvent.change(selectElement, { target: { value: "Red" } });

	// 	expect(selectElement).toHaveValue("Red");
	// });
});
