import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price * action.paytload.quantity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProductToCart, reset } = cartSlice.actions;
export default cartSlice.reducer;
