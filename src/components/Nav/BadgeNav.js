import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  NavBadgeContainer,
  NavMenuItem,
  NavRightLink,
} from "../styles/NavBar.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BadgeNav = ({ open }) => {
  const cartItems = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <NavBadgeContainer open={open}>
        <NavRightLink to={currentUser && "/cart"}>
          <NavMenuItem>
            {currentUser && (
              <Badge
                badgeContent={cartItems}
                color="success"
                style={{ position: "absolute", right: 0 }}
              />
            )}
            <ShoppingCartOutlinedIcon />
          </NavMenuItem>
        </NavRightLink>
      </NavBadgeContainer>
    </>
  );
};

export default BadgeNav;
