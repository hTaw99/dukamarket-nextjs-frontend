import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    sort: "",
    category: [],
    brand: [],
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setFilters(state, { payload }) {
      const { name, value } = payload;
      state.filters[name] = value;
    },
    removeFilter(state, { payload }) {
      const { name, value } = payload;
      if (name === "sort") {
        state.filters[name] = "";
      } else {
        state.filters[name] = state.filters[name].filter(
          (el) => el.split(",")[1] !== value
        );
      }
    },
    removeAllFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilters, removeFilter, removeAllFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
