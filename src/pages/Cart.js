import NavBar from "../components/Nav/NavBar";
import HomeHeader from "../components/Home/HomeHeader";
import HomeNewsLetter from "../components/Home/HomeNewsLetter";
import Footer from "../components/Footer";
import { hotItems } from "../components/Data/HotProductsData";
import {
  BreadcrumbCountiner,
  BreadcrumbContent,
} from "../components/styles/Product/Product.styled";
import CartMain from "../components/Cart/CartMain";
import {
  CartPageMainContainer,
  CartPageContainer,
  CartContainer,
  CartHeader,
} from "../components/styles/Cart/Cart.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkOut, setCheckOut] = useState(false);
  const isSearchPopupOpen = useSelector(
    (state) => state.navbar.isSearchPopupOpen
  );
  useEffect(() => {
    let totalPrice = 0;
    if (cart.products.length > 0) {
      cart.products.map((product) => {
        totalPrice += product.total_price;
      });
    }
    setTotalPrice(totalPrice.toFixed(2));
  }, [cart.products]);
  // useEffect(() => {
  //   // checkOut && setCheckOut(true);
  // }, [checkOut]);
  return (
    <CartPageMainContainer>
      <BreadcrumbCountiner>
        <BreadcrumbContent>Home-Cart</BreadcrumbContent>
      </BreadcrumbCountiner>
      <CartPageContainer
        isSearchPopupOpen={isSearchPopupOpen}
        // popup={checkOut ? true : false}
      >
        <CartContainer>
          <CartHeader>Your Cart</CartHeader>

          {cart.products.length > 0 && (
            <CartMain
              cart={cart}
              totalPrice={totalPrice}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
            />
          )}
        </CartContainer>
      </CartPageContainer>
      <HomeNewsLetter />
      <Footer />
    </CartPageMainContainer>
  );
};

export default Cart;
