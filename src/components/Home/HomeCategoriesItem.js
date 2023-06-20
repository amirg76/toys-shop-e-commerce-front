import { Link } from "react-router-dom";
import {
  HomeCategoriesItemContainer,
  HomeCategoriesItemImg,
  HomeCategoriesItemTitle,
  HomeCategoriesItemLink,
} from "../styles/Home/HomeCategories.styled";
const HomeCategoriesItem = ({ item }) => {
  return (
    <>
      <HomeCategoriesItemContainer>
        <HomeCategoriesItemLink to={`/product-list-page/${item.cat}`}>
          <HomeCategoriesItemImg src={item.img} />
          <HomeCategoriesItemTitle>{item.title}</HomeCategoriesItemTitle>
        </HomeCategoriesItemLink>
      </HomeCategoriesItemContainer>
    </>
  );
};

export default HomeCategoriesItem;
