import { NavLogo, NavLogoSpan } from "./styles/NavBar.styled";
const Logo = () => {
  return (
    <NavLogo>
      <NavLogoSpan color="green" fm="Anton, sans-serif" fs="2vw">
        S
      </NavLogoSpan>
      <NavLogoSpan color="green" fm="Anton, sans-serif">
        HOP
      </NavLogoSpan>
      <NavLogoSpan color="yellow" fm="'Poppins', sans-serif" fs="2vw">
        &F
      </NavLogoSpan>
      <NavLogoSpan color="yellow" fm="'Poppins', sans-serif">
        UN
      </NavLogoSpan>
      <NavLogoSpan color="blue" fm="Fasthand, cursive" fs="2vw">
        &K
      </NavLogoSpan>
      <NavLogoSpan color="blue" fm="Fasthand, cursive">
        IDS
      </NavLogoSpan>
    </NavLogo>
  );
};

export default Logo;
