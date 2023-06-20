import {
  ProductDescContainer,
  ProductDescHeader,
  ProductDescContent,
} from "../styles/Product/Product.styled";
const ProductDesc = ({ desc }) => {
  return (
    <ProductDescContainer>
      <ProductDescHeader>Product Description</ProductDescHeader>
      <ProductDescContent>{desc}</ProductDescContent>
    </ProductDescContainer>
  );
};

export default ProductDesc;
