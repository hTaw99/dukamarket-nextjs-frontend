import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  shippingAddress: [],
  myAddress: null,
  step: 1,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,

  reducers: {
    // setShippingAddress(state, { payload }) {
    //   if (state.shippingAddress.length === 0) {
    //     state.shippingAddress.push(payload);
    //     state.shippingAddress.forEach((item, i) => {
    //       item.id = i + 1;
    //     });
    //     state.myAddress = state.shippingAddress[0];
    //   } else {
    //     if (payload.useAsShippingAddress === true) {
    //       state.shippingAddress.map((add) =>
    //         add?.useAsShippingAddress
    //           ? (add.useAsShippingAddress = false)
    //           : null
    //       );
    //     }
    //     state.shippingAddress.push(payload);
    //     state.shippingAddress.forEach((item, i) => {
    //       item.id = i + 1;
    //     });

    //     state.myAddress = state.shippingAddress.find(
    //       (add) => add.useAsShippingAddress
    //     );
    //     console.log(current(state.shippingAddress));
    //   }
    // },

    setMyAddress(state, { payload }) {
      // state.myAddress = state.shippingAddress.find((add) => add.id === payload);
      state.myAddress = payload;
    },

    setStep(state, { payload }) {
      state.step = payload;
    },
  },
});

export const { setShippingAddress, setMyAddress, setStep } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
