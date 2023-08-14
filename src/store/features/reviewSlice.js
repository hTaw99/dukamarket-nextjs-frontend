import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,

  reducers: {
    enableEditing(state) {
      state.isEditing = true;
    },
    disableEditing(state) {
      state.isEditing = false;
    },
  },
});

export const { enableEditing, disableEditing } = reviewSlice.actions;
export default reviewSlice.reducer;
