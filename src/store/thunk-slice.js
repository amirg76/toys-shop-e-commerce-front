import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../Api/Api";
export const createCart = createAsyncThunk(
  "cart/createData",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await API.post("/carts", {
        headers: { Authorization: `Bearer ${token}` },
        arg,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateData",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await API.put(`/carts/${arg.cartId}`, {
        headers: { Authorization: `Bearer ${token}` },
        arg,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/deleteData",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await API.delete(`/carts/${arg}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (arg, { rejectWithValue }) => {
    const { userId, token } = arg;

    try {
      const { data } = await API.get(`/carts/find/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const getUser = createAsyncThunk(
  "users/getUser",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");

    try {
      const { data } = await API.get(`/users/findOne/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");

    try {
      const { data } = await API.put(`/users/account/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
        arg,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");

    try {
      const { data } = await API.delete(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");
    try {
      const { data } = await API.post("/orders/", {
        headers: { Authorization: `Bearer ${token}` },
        arg,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getOrdersByUser = createAsyncThunk(
  "orders/getOrdersByUser",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");
    try {
      const { data } = await API.get(`/orders/find/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const createLike = createAsyncThunk(
  "orders/createLike",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await API.post("/likes/", {
        headers: { Authorization: `Bearer ${token}` },
        arg,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteLikes = createAsyncThunk(
  "users/deleteLikes",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");

    try {
      const { data } = await API.delete(`/likes/${userId}`, {
        data: { arg },
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const getLikesByUser = createAsyncThunk(
  "orders/getLikesByUser",
  async (arg, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");
    try {
      const { data } = await API.get(`/likes/find/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
