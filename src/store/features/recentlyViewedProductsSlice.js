"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentlyViewedProducts:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("browserHistory")) || []
      : [],
};

const recentlyViewedProductsSlice = createSlice({
  name: "history",
  initialState,

  reducers: {
    setAsViewedProduct(state, { payload }) {
      const viewedProduct = state.recentlyViewedProducts.find(
        (product) => product._id === payload._id
      );
      if (viewedProduct) {
        viewedProduct.views += 1;
        const viewedProductIdx =
          state.recentlyViewedProducts.indexOf(viewedProduct);
        state.recentlyViewedProducts.splice(viewedProductIdx, 1);
        state.recentlyViewedProducts.unshift(viewedProduct);
      } else {
        state.recentlyViewedProducts.unshift({ ...payload, views: 1 });
        // state.recentlyViewedProductsIds.unshift(payload._id);
      }
      typeof window !== "undefined" &&
        localStorage.setItem(
          "browserHistory",
          JSON.stringify(state.recentlyViewedProducts)
        );
      //   localStorage.setItem(
      //     "recentlyViewedProductsIds",
      //     JSON.stringify(state.recentlyViewedProductsIds)
      //   );
    },

    clearHistory(state) {
      state.recentlyViewedProducts = [];
      typeof window !== "undefined" &&
        localStorage.setItem(
          "browserHistory",
          JSON.stringify(state.recentlyViewedProducts)
        );
    },
  },
});

export const { setAsViewedProduct, clearHistory } =
  recentlyViewedProductsSlice.actions;
export default recentlyViewedProductsSlice.reducer;
