import GlobalStyles from "./components/styles/Global.styled";
import HomeHeader from "./components/Home/HomeHeader";
import NavBar from "./components/Nav/NavBar";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import SuccessPay from "./pages/SuccessPay";
import UserAccount from "./pages/UserAccount";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, getCart } from "./store/thunk-slice";
import ScrollToTop from "./components/hooks/scrollToTop";
const App = () => {
  const dispatch = useDispatch();

  // const user = false;
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");

    if (token) {
      dispatch(getUser());
      dispatch(getCart({ userId, token }));
    }
  }, []);

  // return (
  //   <>
  //     <GlobalStyles />

  //     {/* <Home /> */}
  //     {/* <ProductListPage /> */}
  //     {/* <Product /> */}
  //     {/* <Register /> */}
  //     {/* <Login /> */}
  //     {/* <Cart /> */}
  //   </>
  // );
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <HomeHeader />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/product-list-page/:category"
          element={<ProductListPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<SuccessPay />} />

        <Route path="/account/:id">
          <Route path=":tab" element={<UserAccount />} />
          <Route path="" element={<UserAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
