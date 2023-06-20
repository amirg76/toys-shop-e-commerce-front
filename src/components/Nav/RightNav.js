import {
  NavUl,
  NavRightLink,
  NavRightUserInContainer,
  NavRightLogOut,
  NavRightAccount,
  NavRightAccountText,
} from "../styles/NavBar.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";
const RightNav = ({ checkNav }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.navbar.navIsVisible);
  const { currentUser } = useSelector((state) => state.user);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    checkNav();
    dispatch(userActions.logOut());
  };

  return (
    <NavUl open={open}>
      {!currentUser ? (
        <>
          <NavRightLink to="/register" onClick={() => checkNav()}>
            Register
          </NavRightLink>
          <NavRightLink to="/login" onClick={() => checkNav()}>
            Sign In
          </NavRightLink>
        </>
      ) : (
        <>
          {/* <NavRightUserInContainer> */}
          <NavRightLogOut onClick={() => logOut()}>
            <NavRightLink to="/">LogOut</NavRightLink>
            <LogoutIcon style={{ color: "white" }} />
          </NavRightLogOut>
          <NavRightAccount onClick={() => checkNav()}>
            <NavRightAccountText>
              <NavRightLink to={`/account/${currentUser._id}`}>
                Account
              </NavRightLink>
            </NavRightAccountText>
            <AccountCircleIcon style={{ color: "white" }} />
          </NavRightAccount>
          {/* </NavRightUserInContainer> */}
        </>
      )}
    </NavUl>
  );
};

export default RightNav;
