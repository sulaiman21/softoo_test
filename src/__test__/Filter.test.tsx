import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";

describe("Filters Component", () => {
	test("renders with default values", () => {
		render(<Filters />);

		// Check if the component renders with the default values
		const filtersLabel = screen.getByText("Filters");
		expect(filtersLabel).toBeInTheDocument();

		const clearFilterOption = screen.getByText("Clear Filter");
		expect(clearFilterOption).toBeInTheDocument();

		// You may add more assertions as needed based on your UI
	});

	test("updates the active filter when an option is selected", () => {
		render(<Filters />);

		// Find the select element and change its value
		const selectElement = screen.getByRole("combobox");
		fireEvent.change(selectElement, { target: { value: "Red" } });

		// Check if the active filter has been updated
		expect(selectElement).toHaveValue("Red");

		// You can also add further assertions if needed
	});
});
