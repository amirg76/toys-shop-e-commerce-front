import StarRating from "./StarRating";
import { StarRatingCountiner } from "../styles/Product/StarRating.styled";
const StarRatingSection = ({ direction, reviews }) => {
  return (
    <>
      <StarRatingCountiner direction={direction}>
        <StarRating direction={direction} reviews={reviews} />
        count
      </StarRatingCountiner>
    </>
  );
};

export default StarRatingSection;
