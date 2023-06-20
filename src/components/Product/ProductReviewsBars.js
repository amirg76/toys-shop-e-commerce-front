import {
  ProductReviewsBarsContainer,
  ProductReviewsBarContainer,
  ProductReviewsBarTitle,
} from "../styles/Product/Product.styled";
const value = 20;
const max = 100;
const ProductReviewsBars = () => {
  return (
    <ProductReviewsBarsContainer>
      {" "}
      {[...Array(5)].map((star, i) => {
        return (
          <ProductReviewsBarContainer key={i}>
            <ProductReviewsBarTitle>{5 - i} Star</ProductReviewsBarTitle>
            <span>
              <progress value={value} max={max} />
            </span>
            <span>{(value / max) * 100}%</span>
          </ProductReviewsBarContainer>
        );
      })}
    </ProductReviewsBarsContainer>
  );
};

export default ProductReviewsBars;
