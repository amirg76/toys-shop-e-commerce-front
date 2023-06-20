import {
  HomeNewsLetterContainer,
  HomeNewsLetterImg,
  HomeNewsLetterHeader,
  HomeNewsLetterText,
  HomeNewsLetterSendContainer,
  HomeNewsLetterSendInput,
  HomeNewsLetterSendButton,
} from "../styles/Home/HomeNewsLetter.styled";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useSelector } from "react-redux";

const HomeNewsLetter = () => {
  const isSearchPopupOpen = useSelector(
    (state) => state.navbar.isSearchPopupOpen
  );
  return (
    <HomeNewsLetterContainer isSearchPopupOpen={isSearchPopupOpen}>
      <HomeNewsLetterImg></HomeNewsLetterImg>
      <HomeNewsLetterHeader>Newsletter</HomeNewsLetterHeader>
      <HomeNewsLetterText>
        Subscribe to our newsletter for free
      </HomeNewsLetterText>
      <HomeNewsLetterSendContainer>
        <HomeNewsLetterSendInput placeholder="Your email" />
        <HomeNewsLetterSendButton>
          Subscribe
          {/* <SendOutlinedIcon /> */}
        </HomeNewsLetterSendButton>
      </HomeNewsLetterSendContainer>
    </HomeNewsLetterContainer>
  );
};

export default HomeNewsLetter;
