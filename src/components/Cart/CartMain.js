import CartItems from "./CartItems";
import CartCheckout from "./CartCheckout";
import { CartMainContainer } from "../styles/Cart/CartMain.styled";

const CartMain = ({ cart, totalPrice, checkOut, setCheckOut }) => {
  return (
    <CartMainContainer>
      <CartItems products={cart.products} />
      <CartCheckout
        shipping={cart.estimated_shipping}
        totalPrice={+totalPrice}
        products={cart.products}
        cartId={cart.cartId}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
      />
    </CartMainContainer>
  );
};

export default CartMain;
