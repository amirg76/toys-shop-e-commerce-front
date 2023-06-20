import {
  ProductSalePriceCountiner,
  ProductSalePriceText,
  ProductSalePriceStock,
} from "../styles/Product/Product.styled";
const ProductSalePrice = ({ price }) => {
  return (
    <ProductSalePriceCountiner>
      <ProductSalePriceText> $ {price}</ProductSalePriceText>
      <ProductSalePriceStock>Available now</ProductSalePriceStock>
    </ProductSalePriceCountiner>
  );
};

export default ProductSalePrice;
