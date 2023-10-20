import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import useFilter from "../hooks/useFilter";
import { useAppSelect } from "../hooks/useRedux";

const Filters: React.FC = () => {
	const { filters, activeFilter, setActiveFilter, updateFiltersList } =
		useFilter();
	const { items, loading } = useAppSelect((state) => state.products);

	useEffect(() => {
		const filtersList = [...new Set(items?.map((item) => item.colour))];
		updateFiltersList(filtersList);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	return (
		<FormControl
			sx={{ width: "20%", marginBottom: (theme) => theme.spacing(5) }}
		>
			<InputLabel>Filters</InputLabel>
			<Select
				label="Filters"
				value={activeFilter}
				onChange={(e) => {
					setActiveFilter(e.target.value);
				}}
				data-testid="filter-select"
				inputProps={{
					"data-testid": "filter-select-input",
				}}
			>
				<MenuItem value="" data-testid="clear_filter">
					Clear Filter
				</MenuItem>
				{filters.length &&
					filters.map((filter) => (
						<MenuItem value={filter} key={filter}>
							{filter}
						</MenuItem>
					))}
			</Select>
		</FormControl>
	);
};

export default Filters;
