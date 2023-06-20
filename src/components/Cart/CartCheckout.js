import { useState } from "react";
import {
  CartCheckoutContainer,
  CartCheckoutHeader,
  CartCheckoutRow,
  CartCheckoutRowContainer,
  CartCheckoutRowContent,
  CartCheckoutRowTotal,
  CartCheckoutRowButton,
} from "../styles/Cart/CartCheckout.styled";
import CartCheckoutPassPopUp from "./CartCheckoutPassPopUp";
import { useDispatch } from "react-redux";
import { checkOutHandle } from "../hooks/orderCheckOut";
import { deleteCart } from "../../store/thunk-slice";
import { cartActions } from "../../store/cart-slice";
const CartCheckout = ({
  shipping,
  totalPrice,
  products,
  cartId,
  checkOut,
  setCheckOut,
}) => {
  const dispatch = useDispatch();

  const handleCheckOut = () => {
    setCheckOut(true);
  };
  return (
    <CartCheckoutContainer>
      <CartCheckoutHeader>ORDER SUMMARY</CartCheckoutHeader>
      <CartCheckoutRow>
        <CartCheckoutRowContainer>
          <CartCheckoutRowContent>Subtotal</CartCheckoutRowContent>
        </CartCheckoutRowContainer>
        <CartCheckoutRowContainer>
          <CartCheckoutRowContent>{totalPrice}</CartCheckoutRowContent>
        </CartCheckoutRowContainer>
      </CartCheckoutRow>
      <CartCheckoutRow>
        <CartCheckoutRowContainer>
          <CartCheckoutRowContent>Estimated Shipping</CartCheckoutRowContent>
        </CartCheckoutRowContainer>
        <CartCheckoutRowContainer>
          <CartCheckoutRowContent>
            {totalPrice ? shipping : 0}
          </CartCheckoutRowContent>
        </CartCheckoutRowContainer>
      </CartCheckoutRow>
      <CartCheckoutRow>
        <CartCheckoutRowContainer>
          <CartCheckoutRowTotal>Total</CartCheckoutRowTotal>
        </CartCheckoutRowContainer>
        <CartCheckoutRowContainer>
          <CartCheckoutRowTotal>
            {totalPrice ? parseFloat(totalPrice + shipping).toFixed(2) : 0}
          </CartCheckoutRowTotal>
        </CartCheckoutRowContainer>
      </CartCheckoutRow>
      <CartCheckoutRow>
        <CartCheckoutRowButton onClick={() => setCheckOut(true)}>
          CHECKOUT NOW
        </CartCheckoutRowButton>
      </CartCheckoutRow>

      {checkOut && (
        <CartCheckoutPassPopUp
          setCheckOut={setCheckOut}
          checkOut={checkOut}
          cartId={cartId}
          products={products}
          totalPrice={totalPrice}
        />
      )}
    </CartCheckoutContainer>
  );
};

export default CartCheckout;
