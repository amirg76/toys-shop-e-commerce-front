import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  ProductReviewBlockProfile,
  ProductReviewBlockTitle,
  ProductReviewStarRating,
  ProductReviewBlockContent,
  ProductReviewTopContainer,
} from "../styles/Product/Product.styled";
import StarRating from "./StarRating";

const ProductReviewBlock = ({ reviews }) => {
  return (
    <ProductReviewTopContainer>
      <ProductReviewBlockProfile>
        <AccountCircleIcon />
        {reviews.name}
      </ProductReviewBlockProfile>
      <ProductReviewBlockTitle>
        <ProductReviewStarRating>
          <StarRating direction="left" reviews={reviews} />
        </ProductReviewStarRating>
        {reviews.title}
      </ProductReviewBlockTitle>
      <ProductReviewBlockContent>{reviews.content}</ProductReviewBlockContent>
    </ProductReviewTopContainer>
  );
};

export default ProductReviewBlock;
