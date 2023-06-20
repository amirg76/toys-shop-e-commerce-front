import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: { isSearchPopupOpen: false, userInput: "" },
  reducers: {
    PopupOpen(state, action) {
      state.isSearchPopupOpen = action.payload;
    },
    UpdateInput(state, action) {
      state.userInput = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
