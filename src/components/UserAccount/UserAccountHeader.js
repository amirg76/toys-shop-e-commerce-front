import { useNavigate } from "react-router-dom";
import {
  UserAccountMainHeader,
  UserAccountProfileHeader,
  UserAccountProfileHeaderName,
  UserAccountProfileLink,
} from "../styles/UserAccount/UserAccount.styled";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { userActions } from "../../store/user-slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const UserAccountHeader = ({ currentUser }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [goToCart, setGoToCart] = useState(false);
  useEffect(() => {
    if (goToCart) {
      navigate("/cart");
    }
  }, [goToCart]);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    dispatch(userActions.logOut());
  };

  return (
    <>
      <UserAccountMainHeader>Personal Area</UserAccountMainHeader>
      <UserAccountProfileHeader>
        <UserAccountProfileLink onClick={handleLogOut}>
          LogOut
        </UserAccountProfileLink>
        /
        <UserAccountProfileLink onClick={() => setGoToCart(true)}>
          Cart
        </UserAccountProfileLink>
        <UserAccountProfileHeaderName>
          - {currentUser.name} {currentUser.lastName}
        </UserAccountProfileHeaderName>
        <AccountCircleIcon />
      </UserAccountProfileHeader>
    </>
  );
};

export default UserAccountHeader;
