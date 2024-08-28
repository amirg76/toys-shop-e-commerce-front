import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  HomeWelcomeContainer,
  HomeWelcomePage,
  HomeWelcomePageText,
  HomeWelcomePageTitle,
  HomeWelcomePageDesc,
  HomeWelcomeImg,
  HomeWelcomeHeader,
  HomeWelcomeImgHeader,
  HomeWelcomeScrool,
} from "../styles/Home/HomeWelcome.styled";

const HomeWelcome = () => {
  const welcomeImgSrc = "assets/images/welcome-background-4.png";
  return (
    <HomeWelcomeContainer>
      <HomeWelcomePage>
        <HomeWelcomePageText>
          <HomeWelcomePageTitle>
            Built to stand the test of tim
          </HomeWelcomePageTitle>
          <HomeWelcomePageDesc>
            Shop SFK latest range of kids bargain toys and play sets. Our latest
            collection is packed with big brand games and activities to suit all
            ages!
          </HomeWelcomePageDesc>
        </HomeWelcomePageText>
        <HomeWelcomeImg src={welcomeImgSrc} />
      </HomeWelcomePage>
      {/* <HomeWelcomeImg></HomeWelcomeImg> */}
      <HomeWelcomeHeader>
        <HomeWelcomeImgHeader />
      </HomeWelcomeHeader>

      <AnchorLink href="#slider-container">
        <HomeWelcomeScrool></HomeWelcomeScrool>
      </AnchorLink>
    </HomeWelcomeContainer>
  );
};

export default HomeWelcome;
