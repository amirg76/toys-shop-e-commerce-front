import { HomeAnimateContainer } from "../styles/Home/HomeAnimate.styled";
import { animateItems } from "../Data/AnimateData";
import HomeAnimateBox from "./HomeAnimateBox";
const HomeAnimate = () => {
  return (
    <HomeAnimateContainer>
      {animateItems.map((item) => (
        <HomeAnimateBox item={item.img} key={item.id} />
      ))}
    </HomeAnimateContainer>
  );
};

export default HomeAnimate;
