import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsToCompare: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addProductToCompare: (state, { payload }) => {
      const selectedProduct = state.productsToCompare.findIndex(
        (p) => p.sku === payload.sku
      );

      selectedProduct !== -1 ? state : state.productsToCompare.push(payload);
    },
    removeProductFromCompare: (state, { payload }) => {
      state.productsToCompare.length === 1
        ? (state.productsToCompare = [])
        : (state.productsToCompare = state.productsToCompare.filter(
            (p) => p.sku !== payload.sku
          ));
    },
  },
});

export const { addProductToCompare, removeProductFromCompare } =
  compareSlice.actions;
export default compareSlice.reducer;
