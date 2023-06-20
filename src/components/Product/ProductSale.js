import { useState } from "react";
import {
  ProductSaleCountiner,
  ProductSaleAddButton,
  ProductSaleWarning,
} from "../styles/Product/Product.styled";
import StarRating from "./StarRating";
import ProductSalePrice from "./ProductSalePrice";
import ProductSaleQuantity from "./ProductSaleQuantity";
import ProductSaleTitle from "./ProductSaleTitle";
import ProductSaleShipingText from "./ProductSaleShipingText";
import ProductSaleSocial from "./ProductSaleSocial";
import ProductSaleAbout from "./ProductSaleAbout";
import StarRatingSection from "./StarRatingSection";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addBasketHandle } from "../hooks/addToBasket";

const ProductSale = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [counter, setCounter] = useState(1);

  return (
    <ProductSaleCountiner>
      <StarRatingSection direction="flex-end" reviews={product.reviews} />
      <ProductSaleTitle title={product.title} />
      <ProductSalePrice price={product.price} />
      <ProductSaleQuantity counter={counter} setCounter={setCounter} />

      <ProductSaleAddButton
        onClick={() => addBasketHandle(dispatch, product, counter, cart)}
      >
        Add To Basket
      </ProductSaleAddButton>
      <ProductSaleWarning>
        {product.warning}
        <WarningAmberIcon
          style={{ backgroundColor: "yellow", marginLeft: "5px" }}
        />
      </ProductSaleWarning>
      <ProductSaleShipingText />
      <ProductSaleSocial />
      <ProductSaleAbout about={product.about} />
    </ProductSaleCountiner>
  );
};

export default ProductSale;
