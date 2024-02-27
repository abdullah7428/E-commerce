import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/products";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});
