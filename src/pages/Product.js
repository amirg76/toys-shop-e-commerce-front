import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadingActions } from "../store/loading-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Loading } from "../components/styles/Product/Product.styled";
import { API } from "../Api/Api";
import {
  ProductMainCountiner,
  ProductMain,
  ProductCountiner,
  BreadcrumbCountiner,
  BreadcrumbContent,
  ProductImgCountiner,
  ProductSaleCountiner,
  ProductImg,
  ProductInfoDescContainer,
} from "../components/styles/Product/Product.styled";
import HomeHeader from "../components/Home/HomeHeader";
import NavBar from "../components/Nav/NavBar";
import HomeNewsLetter from "../components/Home/HomeNewsLetter";
import Footer from "../components/Footer";
import { hotItems } from "../components/Data/HotProductsData";
import ProductSale from "../components/Product/ProductSale";
import ProductImgDetails from "../components/Product/ProductImgDetails";
import ProductInfo from "../components/Product/ProductInfo";
import ProductDesc from "../components/Product/ProductDesc";
import ProductReviews from "../components/Product/ProductReviews";
import LoadingPage from "./LoadingPage";
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.active);
  // const selectedProduct = hotItems.filter((product) => product.id === +id);
  const [selectedProduct, setSelectedProduct] = useState(false);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        dispatch(loadingActions.toggle());
        const { data } = await API.get(`/products/find/${id}`);
        setSelectedProduct(data);
        dispatch(loadingActions.toggle());
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProductById();
  }, []);
  return (
    <ProductMainCountiner>
      {loading ? (
        <LoadingPage />
      ) : (
        selectedProduct && (
          <ProductMain>
            <BreadcrumbCountiner>
              <BreadcrumbContent>
                Home-{selectedProduct.title}
              </BreadcrumbContent>
            </BreadcrumbCountiner>

            <ProductCountiner>
              <ProductImgCountiner>
                <ProductImg src={selectedProduct.img} />
                <ProductImgDetails
                  ages={selectedProduct.age}
                  pieces={selectedProduct.pieces}
                />
              </ProductImgCountiner>
              <ProductSale product={selectedProduct} />
            </ProductCountiner>
            <ProductInfoDescContainer>
              <ProductInfo product={selectedProduct} />
              <ProductDesc desc={selectedProduct.desc} />
            </ProductInfoDescContainer>
            <ProductReviews reviews={selectedProduct.reviews} />
            <HomeNewsLetter />
            <Footer />
          </ProductMain>
        )
      )}
    </ProductMainCountiner>
  );
};

export default Product;
