import { createSlice } from "@reduxjs/toolkit";
import { getLikesByUser, createLike, deleteLikes } from "./thunk-slice";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likesArray: [],
  },

  reducers: {},
  extraReducers: {
    [getLikesByUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        const likes = payload.map((like) => {
          return { ...like };
        });

        state.likesArray = likes;
      }
    },
    [createLike.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.likesArray.push(payload);
      }
    },
  },
});

export const likesActions = likesSlice.actions;

export default likesSlice;
