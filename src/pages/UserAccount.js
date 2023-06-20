import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserAccountMainCountiner } from "../components/styles/UserAccount/UserAccount.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserAccountHeader from "../components/UserAccount/UserAccountHeader";
import UserAccountTabs from "../components/UserAccount/UserAccountTabs";
import UserAccountContent from "../components/UserAccount/UserAccountContent";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavRightLink } from "../components/styles/NavBar.styled";
import { getUser } from "../store/thunk-slice";

const tabIcons = [FavoriteIcon, ShoppingBagIcon, AccountCircleIcon];
const UserAccount = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, tab } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [toggleState, setToggleState] = useState(2);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return navigate("/");
    }
  }, [currentUser]);

  return (
    <UserAccountMainCountiner>
      {currentUser !== null && <UserAccountHeader currentUser={currentUser} />}

      <UserAccountTabs
        toggleState={tab !== undefined ? Number(tab) : toggleState}
        setToggleState={setToggleState}
        tabIcons={tabIcons}
      />
      {currentUser && (
        <UserAccountContent
          toggleState={tab !== undefined ? Number(tab) : toggleState}
          tabIcons={tabIcons}
          currentUser={currentUser}
        />
      )}
    </UserAccountMainCountiner>
  );
};

export default UserAccount;
