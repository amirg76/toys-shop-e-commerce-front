import { NavBurger } from "../styles/NavBar.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Burger = ({ checkNav, burgerNavOpen, setBurgerNavOpen }) => {
  const open = useSelector((state) => state.navbar.navIsVisible);

  const toggleNav = () => {
    checkNav();
    setBurgerNavOpen(!burgerNavOpen);
  };

  return (
    <>
      <NavBurger open={open} onClick={() => toggleNav()}>
        <div />
        <div />
        <div />
      </NavBurger>
    </>
  );
};

export default Burger;
