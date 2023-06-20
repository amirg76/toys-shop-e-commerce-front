import { createSlice } from "@reduxjs/toolkit";
const loadingSlice = createSlice({
  name: "loading",
  initialState: { active: false },
  reducers: {
    toggle(state) {
      state.active = !state.active;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;
