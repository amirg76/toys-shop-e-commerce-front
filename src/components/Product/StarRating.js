import { StarRatingCountiner } from "../styles/Product/StarRating.styled";
import { FaStar } from "react-icons/fa";
import StarRatingBlock from "./StarRatingBlock";
const StarRating = ({ direction, reviews }) => {
  return (
    <>
      {/* // <StarRatingCountiner direction={direction}> */}
      {reviews && <StarRatingBlock stars={reviews.stars} />}
    </>
  );
  {
    /* // </StarRatingCountiner> */
  }
};

export default StarRating;
