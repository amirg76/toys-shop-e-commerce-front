import {
  ProductReviewsContainer,
  ProductReviewsStatics,
  ProductReviewsHeaders,
  ProductReviewsContent,
} from "../styles/Product/Product.styled";
import StarRating from "./StarRating";
import StarRatingSection from "./StarRatingSection";
import ProductReviewsBars from "./ProductReviewsBars";
import ProductReviewsTop from "./ProductReviewsTop";
const ProductReviews = ({ reviews }) => {
  return (
    <ProductReviewsContainer>
      <ProductReviewsStatics>
        <ProductReviewsHeaders>Reviews</ProductReviewsHeaders>
        <StarRatingSection direction="flex-start" reviews={reviews} />
        {/* <StarRating direction="flex-start" reviews={reviews} /> */}
        <ProductReviewsBars />
      </ProductReviewsStatics>
      <ProductReviewsContent>
        <ProductReviewsHeaders>Top Reviews</ProductReviewsHeaders>
        <ProductReviewsTop reviews={reviews} />
      </ProductReviewsContent>
    </ProductReviewsContainer>
  );
};

export default ProductReviews;
