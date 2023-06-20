import {
  ProductInfoContainer,
  ProductInfoHeader,
  ProductInfoContent,
  ProductInfoContentContainer,
  ProductInfoContentTitle,
  ProductInfoContentText,
} from "../styles/Product/Product.styled";
const ProductInfo = ({ product }) => {
  return (
    <ProductInfoContainer>
      <ProductInfoHeader>Product Information</ProductInfoHeader>
      <ProductInfoContent>
        {Object.entries(product.info).map((item, i) => {
          return (
            <ProductInfoContentContainer key={i}>
              <ProductInfoContentTitle>{item[0]}</ProductInfoContentTitle>
              <ProductInfoContentText>{item[1]}</ProductInfoContentText>
            </ProductInfoContentContainer>
          );
        })}
      </ProductInfoContent>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
