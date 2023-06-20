import {
  ProductSaleAboutContainer,
  ProductSaleAboutHeader,
  ProductSaleAboutContent,
  ProductSaleAboutContentUl,
  ProductSaleAboutContentLi,
} from "../styles/Product/Product.styled";

const ProductSaleAbout = ({ about }) => {
  const handleAboutContent = () => {
    return (
      <ProductSaleAboutContentUl>
        {about.map((item, index) => {
          return (
            <ProductSaleAboutContentLi key={index}>
              {item}
            </ProductSaleAboutContentLi>
          );
        })}
      </ProductSaleAboutContentUl>
    );
  };
  return (
    <ProductSaleAboutContainer>
      <ProductSaleAboutHeader>About this item</ProductSaleAboutHeader>
      <ProductSaleAboutContent>{handleAboutContent()}</ProductSaleAboutContent>
    </ProductSaleAboutContainer>
  );
};

export default ProductSaleAbout;
