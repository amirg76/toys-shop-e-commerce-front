import { createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser, deleteUser } from "./thunk-slice";
const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null, isFetching: false, error: false },
  reducers: {
    loginStart(state) {
      state.isFetching = true;
    },
    loginSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
    logOut(state) {
      state.currentUser = null;
    },
    registerStart(state) {
      state.isFetching = true;
    },
    registerSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
