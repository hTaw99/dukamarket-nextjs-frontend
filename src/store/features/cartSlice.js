import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  totalItems: 0,
  totalPrice: 0,
  items: [],

};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setCart(state, { payload }) {
      state.totalItems = payload.cart?.totalItems || 0;
      state.totalPrice = payload.cart?.totalPrice || 0;
      state.items = payload.cart?.items || [];
    },

    removeCart(state, { payload }) {
      state.totalItems = 0;
      state.totalPrice = 0;
      items = payload.cart.items;
    },
  },
});

export const { setCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
