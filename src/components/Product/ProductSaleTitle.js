import {
  ProductSaleTitleCountiner,
  ProductSaleTitleText,
  ProductSaleTitleImg,
} from "../styles/Product/Product.styled";
const ProductSaleTitle = ({ title }) => {
  return (
    <ProductSaleTitleCountiner>
      <ProductSaleTitleText>{title}</ProductSaleTitleText>
      <ProductSaleTitleImg></ProductSaleTitleImg>
    </ProductSaleTitleCountiner>
  );
};

export default ProductSaleTitle;
