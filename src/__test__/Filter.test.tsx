import { Provider } from "react-redux";
import { cleanup, render, screen } from "@testing-library/react";
import Filters from "../components/Filters";
import { store } from "../libs";
import { act } from "react-dom/test-utils";

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
		act(() => {
			filters.click();
		});

		const clearFilter = screen.queryByTestId("clear_filter");
		expect(clearFilter).not.toBeInTheDocument();
	});
});
