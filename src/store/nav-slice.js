import { createSlice } from "@reduxjs/toolkit";
const navSlice = createSlice({
  name: "navbar",
  initialState: { navIsVisible: false },
  reducers: {
    toggle(state) {
      state.navIsVisible = !state.navIsVisible;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
