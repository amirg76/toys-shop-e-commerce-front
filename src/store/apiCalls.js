import { userActions } from "./user-slice";
import { API } from "../Api/Api";
import { getCart } from "./thunk-slice";
export const login = async (dispatch, user) => {
  dispatch(userActions.loginStart());
  try {
    const { data } = await API.post("/auth/login", user);

    if (data.token !== undefined) {
      const token = data.token;
      const userId = data.user._id;

      dispatch(userActions.loginSuccess(data.user));
      dispatch(getCart({ userId, token }));
      localStorage.setItem("token", token);
      localStorage.setItem("userid", userId);
    }
  } catch (err) {
    dispatch(userActions.loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(userActions.registerStart());
  try {
    const { data } = await API.post("/auth/register", user);
    console.log(data);

    if (data.token !== undefined) {
      const token = data.token;
      const userId = data.user._id;
      dispatch(userActions.registerSuccess(data.user));
      // dispatch(getCart({ userId, token }));
      localStorage.setItem("token", token);
      localStorage.setItem("userid", userId);
    }
  } catch (err) {
    dispatch(userActions.registerFailure());
  }
};
