import {
  NavContainer,
  NavLogoContainer,
  NavLink,
} from "../styles/NavBar.styled";
import Logo from "../Logo";
import Burger from "./Burger";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { navActions } from "../../store/nav-slice";
import { useDispatch } from "react-redux";
import RightNav from "./RightNav";
import BadgeNav from "./BadgeNav";
import { useState } from "react";
import { useEffect } from "react";
import { searchActions } from "../../store/search-slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.navbar.navIsVisible);
  const [burgerNavOpen, setBurgerNavOpen] = useState(false);

  const checkNav = () => {
    dispatch(navActions.toggle());
  };
  useEffect(() => {
    dispatch(searchActions.PopupOpen(false));
    dispatch(searchActions.UpdateInput(""));
  }, [burgerNavOpen]);
  return (
    <>
      <NavContainer open={open}>
        <NavLogoContainer onClick={() => open && checkNav()}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </NavLogoContainer>

        <SearchBar burgerNavOpen={burgerNavOpen} />
        <RightNav checkNav={checkNav} />
        <BadgeNav open={open} />
        <Burger
          checkNav={checkNav}
          burgerNavOpen={burgerNavOpen}
          setBurgerNavOpen={setBurgerNavOpen}
        />
      </NavContainer>
    </>
  );
};

export default NavBar;
