import {
  ProductImgDetailsCountiner,
  CakeIconCustom,
  ExtensionIconCustom,
  ProductImgDetailsBox,
  ProductImgDetailsBoxTitle,
  ProductImgDetailsBoxNumber,
} from "../styles/Product/Product.styled";

const ProductImgDetails = ({ ages, pieces }) => {
  return (
    <ProductImgDetailsCountiner>
      <ProductImgDetailsBox>
        <CakeIconCustom />
        <ProductImgDetailsBoxNumber> {ages}</ProductImgDetailsBoxNumber>

        <ProductImgDetailsBoxTitle>Ages</ProductImgDetailsBoxTitle>
      </ProductImgDetailsBox>
      <ProductImgDetailsBox>
        <ExtensionIconCustom />
        <ProductImgDetailsBoxNumber>{pieces}</ProductImgDetailsBoxNumber>

        <ProductImgDetailsBoxTitle>Pieces</ProductImgDetailsBoxTitle>
      </ProductImgDetailsBox>
    </ProductImgDetailsCountiner>
  );
};

export default ProductImgDetails;
