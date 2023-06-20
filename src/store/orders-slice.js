import { createSlice } from "@reduxjs/toolkit";
import { getOrdersByUser } from "./thunk-slice";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    ordersArray: [],
    // ordersArray: [{ orderId: "", orderDate: "", amount: 0, status: "" }],
  },

  reducers: {},
  extraReducers: {
    [getOrdersByUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        const orders = payload.map((order) => {
          return { ...order };
        });
        // const orders = payload.map((order) => {
        //   const stateEdit = {
        //     orderId: "",
        //     orderDate: "",
        //     amount: 0,
        //     status: "",
        //   };
        //   stateEdit.orderId = order._id;
        //   stateEdit.orderDate = order.createdAt;
        //   stateEdit.amount = order.amount;
        //   stateEdit.status = order.status;

        //   return stateEdit;
        // });

        state.ordersArray = orders;
      }
    },
  },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice;
