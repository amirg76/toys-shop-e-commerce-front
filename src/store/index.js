import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";
import filterSlice from "./filter-slice";
import loadingSlice from "./loading-slice";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";
import searchSlice from "./search-slice";
import ordersSlice from "./orders-slice";
import likesSlice from "./likes-slice";
const store = configureStore({
  reducer: {
    navbar: navSlice.reducer,
    productFilter: filterSlice.reducer,
    loading: loadingSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    search: searchSlice.reducer,
    orders: ordersSlice.reducer,
    likes: likesSlice.reducer,
    // item: cartItemSlice.reducer,
  },
});

export default store;
