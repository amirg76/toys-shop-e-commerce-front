import NavBar from "../components/Nav/NavBar";
import HomeHeader from "../components/Home/HomeHeader";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeWelcome from "../components/Home/HomeWelcome";
import HomeCategories from "../components/Home/HomeCategories";
import HomeHotProducts from "../components/Home/HomeHotProducts";
import HomeNewsLetter from "../components/Home/HomeNewsLetter";
import Footer from "../components/Footer";
import { HomeHotProductsHeader } from "../components/styles/Home/HomeHotProducts.styled";
import { loadingActions } from "../store/loading-slice";
import { API } from "../Api/Api";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(false);
  const [randomProducts, setRandomProducts] = useState(false);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const filterRandomProduct = (data) => {
    const filterRandomArray = [];
    const filterRandomNumbers = {};
    while (filterRandomArray.length < 3) {
      const randomNumber = getRandomInt(data.length);
      if (filterRandomNumbers[randomNumber] === undefined) {
        filterRandomNumbers[randomNumber] = true;
        filterRandomArray.push(data[randomNumber]);
      }
    }
    setRandomProducts(filterRandomArray);
  };
  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        dispatch(loadingActions.toggle());

        const { data } = await API.get("/products");
        setProducts(data);
        const random = filterRandomProduct(data);
        dispatch(loadingActions.toggle());
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProductByCategory();
  }, []);
  return (
    <>
      {/* <HomeHeader />
      <NavBar /> */}
      <HomeWelcome />
      <HomeCarousel randomProducts={randomProducts} />
      <HomeCategories />
      <HomeHotProductsHeader>Hot Products</HomeHotProductsHeader>
      <HomeHotProducts products={products} from="main" category={false} />
      <HomeNewsLetter />
      <Footer />
    </>
  );
};

export default Home;
