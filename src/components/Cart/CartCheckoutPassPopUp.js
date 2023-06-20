import {
  CartCheckoutPopUpCountiner,
  CartCheckoutPopUpOverlay,
  CartCheckoutPopUpMain,
  CartCheckoutPopUpHeader,
  CartCheckoutPopUpText,
} from "../styles/Cart/CartCheckout.styled";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { cartActions } from "../../store/cart-slice";
import { deleteCart } from "../../store/thunk-slice";
import { useDispatch } from "react-redux";
import { checkOutHandle } from "../hooks/orderCheckOut";

const CartCheckoutPassPopUp = ({
  checkOut,
  setCheckOut,
  cartId,
  products,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    const CartReset = {
      cartId: "",
      userId: "",
      total: 0,
      quantity: 0,
      products: [],
    };
    dispatch(cartActions.removeCart(CartReset));
    dispatch(deleteCart(cartId));
    checkOutHandle(dispatch, products, cartId, totalPrice);
    setCheckOut();
  };
  return (
    <>
      <CartCheckoutPopUpCountiner>
        <CartCheckoutPopUpOverlay onClick={() => handleCart()} />
        <CartCheckoutPopUpMain>
          <CartCheckoutPopUpHeader>
            <CloseIcon
              onClick={() => handleCart()}
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            />
          </CartCheckoutPopUpHeader>
          <CartCheckoutPopUpText>
            Order Successful Send
            <TaskAltIcon style={{ fontSize: "2rem", marginLeft: "1rem" }} />
          </CartCheckoutPopUpText>
        </CartCheckoutPopUpMain>
      </CartCheckoutPopUpCountiner>
    </>
  );
};

export default CartCheckoutPassPopUp;
