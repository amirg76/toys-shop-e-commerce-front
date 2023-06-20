import { createSlice } from "@reduxjs/toolkit";
import { createCart, updateCart, getCart, deleteCart } from "./thunk-slice";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: "",
    userId: "",
    products: [],
    quantity: 0,
    total: 0,
    estimated_shipping: 3.99,
  },
  reducers: {
    removeProduct(state, action) {
      state.quantity -= 1;
      state.products = action.payload.filterItems;
      state.total = action.payload.totalCartPrice;
    },
    removeCart(state, action) {
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
      state.userId = action.payload.userId;
      state.cartId = action.payload._id;
    },
    incQuantityProduct(state, action) {
      state.products.forEach((item) => {
        if (item._id === action.payload.id) {
          item.productQuantity += 1;
          item.total_price = item.price * item.productQuantity;
          state.total += +item.price.toFixed(2);
        }
      });
    },
    decQuantityProduct(state, action) {
      // console.log(state.total);
      state.products.forEach((item) => {
        if (item._id === action.payload.id && item.productQuantity > 0) {
          item.productQuantity -= 1;
          item.total_price = item.price * item.productQuantity;
          state.total -= +item.price.toFixed(2);
        }
      });
    },
  },
  extraReducers: {
    [createCart.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
      state.quantity = payload.quantity;
      state.total = payload.total;
      state.userId = payload.userId;
      state.cartId = payload._id;
    },
    [updateCart.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
      state.quantity = payload.quantity;
      state.total = payload.total;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.products = payload.products;
        state.quantity = payload.quantity;
        state.total = payload.total;
        state.userId = payload.userId;
        state.cartId = payload._id;
      }
    },
    [deleteCart.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload) {
        state = payload;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
