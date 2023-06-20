import ProductReviewBlock from "./ProductReviewBlock";
import { ProductReviewTopContainer } from "../styles/Product/Product.styled";
const ProductReviewsTop = ({ reviews }) => {
  return (
    <>
      {/* {reviews.map((review) => { */}
      <ProductReviewBlock reviews={reviews} />
      {/* })} */}
    </>
  );
};

export default ProductReviewsTop;
