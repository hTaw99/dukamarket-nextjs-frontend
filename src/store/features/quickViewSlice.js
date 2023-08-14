import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productToView: {},
};

const quickViewSlice = createSlice({
  name: "quickview",
  initialState,
  reducers: {
    setProductToView: (state, { payload }) => {
      state.productToView = {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        image: payload.image,
        description: payload.description,
        colors: payload.colors,
        priceAfterDiscount: payload.priceAfterDiscount,
        averageRating: payload.averageRating,
        numReviews: payload.numReviews,
      };
    },
  },
});

export const { setProductToView } = quickViewSlice.actions;
export default quickViewSlice.reducer;
