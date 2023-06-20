import {
  FooterContainer,
  FooterLeft,
  FooterCenter,
  FooterRight,
  FooterDesc,
  FooterSocialContainer,
  FooterSocialIcon,
  FooterTitle,
  FooterCenterList,
  FooterCenterListItem,
  FooterContactItem,
} from "./styles/Footer.styled";
import Logo from "./Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavRightLink } from "./styles/NavBar.styled";
const Footer = () => {
  const navigate = useNavigate();
  const [goTo, setGoTo] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUser && goTo) {
      navigate(`${goTo}`);
    }
    if (goTo === "/" || goTo === "/terms") navigate(`/`);
  }, [goTo]);
  const isSearchPopupOpen = useSelector(
    (state) => state.navbar.isSearchPopupOpen
  );
  const handleGoTo = (link) => {
    setGoTo(link);
  };
  return (
    <FooterContainer isSearchPopupOpen={isSearchPopupOpen}>
      <NavRightLink to={goTo}></NavRightLink>
      <FooterLeft>
        <Logo />
        <FooterDesc>
          We like to think of ourselves as one big happy (and slightly crazy)
          family, and whether you shop with us all the time or have never
          visited our store or placed an order with us yet - welcome to the
          world of SFK Stock!
        </FooterDesc>
        <FooterSocialContainer>
          <FooterSocialIcon color="#3B5999">
            <FacebookIcon />
          </FooterSocialIcon>
          <FooterSocialIcon color="#E4405F">
            <InstagramIcon />
          </FooterSocialIcon>
          <FooterSocialIcon color="#55ACEE">
            <TwitterIcon />
          </FooterSocialIcon>
        </FooterSocialContainer>
      </FooterLeft>
      <FooterCenter>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterCenterList>
          <FooterCenterListItem onClick={() => handleGoTo("/")}>
            Home
          </FooterCenterListItem>
          <FooterCenterListItem onClick={() => handleGoTo("/cart")}>
            Cart
          </FooterCenterListItem>
          <FooterCenterListItem
            onClick={() => handleGoTo(`/account/${currentUser._id}`)}
          >
            My Account
          </FooterCenterListItem>
          <FooterCenterListItem
            onClick={() => handleGoTo(`/account/${currentUser._id}/1`)}
          >
            Order Tracking
          </FooterCenterListItem>
          <FooterCenterListItem
            onClick={() => handleGoTo(`/account/${currentUser._id}/0`)}
          >
            Wishlist
          </FooterCenterListItem>
          <FooterCenterListItem onClick={() => handleGoTo("/terms")}>
            Terms
          </FooterCenterListItem>
        </FooterCenterList>
      </FooterCenter>
      <FooterRight>
        <FooterTitle>Contact</FooterTitle>
        <FooterContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          581 Shanon, South San Francisco, 58745
        </FooterContactItem>
        <FooterContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +1 234 56 78
        </FooterContactItem>
        <FooterContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          contact@sfk.com
        </FooterContactItem>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
