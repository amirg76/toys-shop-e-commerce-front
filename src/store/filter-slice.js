import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const filtersItems = (filterArray, id, title) => {
  let findFilterItem = false;
  filterArray.filter((item) => {
    if (item.obj_id === id && item.title === title) {
      findFilterItem = true;
      return item;
    }
  });
  return findFilterItem;
};

const filterSlice = createSlice({
  name: "filter",
  initialState: { items: [] },
  reducers: {
    changeFilter(state, action) {
      let { id, title, filterMin, filterMax } = action.payload;
      let filterArray = current(state.items);
      const findProducts = filtersItems(filterArray, id, title);

      if (!findProducts) {
        filterArray = [
          ...filterArray,
          {
            obj_id: id,
            title: title,
            active: true,
            filterMin,
            filterMax,
          },
        ];
      } else if (filterArray.length > 1) {
        filterArray = filterArray.filter((item) => {
          if (item.filterMin !== filterMin && item.filterMax !== filterMax) {
            return item;
          }
        });
      } else if (filterArray.length === 1) {
        filterArray = [];
      }

      state.items = filterArray;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
