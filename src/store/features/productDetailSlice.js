import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tapValue: "description",
  shownPicture: "",
};

const productDetailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    showDescription: (state) => {
      state.tapValue = "description";
    },
    showReview: (state) => {
      state.tapValue = "review";
    },
    setShownPicture: (state, { payload }) => {
      state.shownPicture = payload;
    },
  },
});

export const { showDescription, showReview, setShownPicture } =
  productDetailSlice.actions;
export default productDetailSlice.reducer;
