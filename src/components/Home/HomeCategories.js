import {
  HomeCategoriesContainer,
  HomeCategoriesBlock,
  HomeCategoriesHeader,
} from "../styles/Home/HomeCategories.styled";
import { HomeLineBreakBlock } from "../styles/Home/HomeLineBreak.styled";
import HomeCategoriesItem from "./HomeCategoriesItem";
import { categoriesItems } from "../Data/CategoriesData";
import HomeWaveShape from "./HomeWaveShape";
import HomeAnimate from "./HomeAnimate";
const HomeCategories = () => {
  return (
    <HomeCategoriesBlock>
      <HomeWaveShape direction="up" color="#1f96f4" />
      <HomeCategoriesHeader>Categories</HomeCategoriesHeader>
      <HomeCategoriesContainer>
        {categoriesItems.map((item) => {
          return <HomeCategoriesItem item={item} key={item.id} />;
        })}
      </HomeCategoriesContainer>
      <HomeAnimate />
      <HomeLineBreakBlock />
    </HomeCategoriesBlock>
  );
};

export default HomeCategories;
