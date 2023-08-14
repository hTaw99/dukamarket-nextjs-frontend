import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "./features/productDetailSlice";
import filterSlice from "./features/filterSlice";
import modelSlice from "./features/modelSlice";
import globalSlice from "./features/globalSlice";
import quickViewSlice from "./features/quickViewSlice";
import authSlice from "./features/authSlice";
import cartSlice from "./features/cartSlice";
import reviewSlice from "./features/reviewSlice";
import compareSlice from "./features/compareSlice";
import recentlyViewedProductsSlice from "./features/recentlyViewedProductsSlice";
import checkoutSlice from "./features/checkoutSlice";

const store = configureStore({
  reducer: {
    global: globalSlice,
    detail: productDetailSlice,
    filter: filterSlice,
    model: modelSlice,
    quickview: quickViewSlice,
    auth: authSlice,
    cart: cartSlice,
    review: reviewSlice,
    compare: compareSlice,
    history: recentlyViewedProductsSlice,
    checkout: checkoutSlice,
    
  },
});

export default store;
