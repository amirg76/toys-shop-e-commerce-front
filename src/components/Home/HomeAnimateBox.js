import { AnimateBox, HomeAnimateImg } from "../styles/Home/HomeAnimate.styled";
const HomeAnimateBox = ({ item }) => {
  return (
    <AnimateBox>
      <HomeAnimateImg src={item}></HomeAnimateImg>
    </AnimateBox>
  );
};

export default HomeAnimateBox;
