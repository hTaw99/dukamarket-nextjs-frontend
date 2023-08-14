import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPictureModelOpen: false,
  isQuickViewModelOpen: false,
  isCartSideModelOpen: false,
  isCompareModelOpen: false,
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    openPictureModel(state) {
      state.isPictureModelOpen = true;
    },
    openQuickViewModel(state) {
      state.isQuickViewModelOpen = !state.isQuickViewModelOpen;
    },
    openCartSideModel(state) {
      state.isCartSideModelOpen = true;
    },
    openCompareModel(state) {
      state.isCompareModelOpen = true;
    },
    closePictureModel(state) {
      state.isPictureModelOpen = false;
    },
    closeQuickViewModel(state) {
      state.isQuickViewModelOpen = false;
    },
    closeCartSideModel(state) {
      state.isCartSideModelOpen = false;
    },
    closeCompareModel(state) {
      state.isCompareModelOpen = false;
    },
  },
});

export const {
  openPictureModel,
  openQuickViewModel,
  openCartSideModel,
  openCompareModel,
  closePictureModel,
  closeQuickViewModel,
  closeCartSideModel,
  closeCompareModel,
} = modelSlice.actions;
export default modelSlice.reducer;
