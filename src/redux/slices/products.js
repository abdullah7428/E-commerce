import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
export const getProducts = createAsyncThunk("Products", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

let initialState = {
  data: [],
  cart: [],
  isLoading: false,
  cartOpen: false,
};

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = { ...action.payload, id: nanoid() };
      state.cart.push(item);
    },
    openCart(state, action) {
      console.log(action.payload);
      state.cartOpen = action.payload;
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((itm) => itm.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      console.log("error");
    });
  },
});

export const { addToCart, openCart,removeItem } = ProductSlice.actions;
export default ProductSlice.reducer;
