import { FaStar } from "react-icons/fa";
const StarRatingBlock = ({ stars }) => {
  const starsArray = new Array(stars);
  // starsArray.length = stars;

  // console.log(starsArray.length);
  return [...starsArray].map((star, i) => {
    return <FaStar size={20} style={{ color: "#ffc107" }} key={i} />;
  });
};

export default StarRatingBlock;
