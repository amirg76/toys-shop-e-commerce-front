import styled from "styled-components";
import { tablet, mobile } from "../../../responsive";
import { keyframes } from "styled-components";
export const HomeWelcomeContainer = styled.div`
  width: 100%;
  height: 99vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${tablet({
    // height: "85vh",
    // marginTop: "12vh",
  })}
`;

export const HomeWelcomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  ${tablet({
    flexDirection: "column",
  })}
`;

export const HomeWelcomePageText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${tablet({
    flex: "none",
    // marginTop: "3rem",
  })}
  ${mobile({
    marginTop: "7rem",
  })}
`;
export const HomeWelcomePageTitle = styled.h1``;
export const HomeWelcomePageDesc = styled.h3`
  width: 45%;
  margin: 1rem 0;

  ${tablet({
    textAlign: "center",
  })}
  ${mobile({
    width: "80%",
  })}
`;
export const HomeWelcomeImg = styled.img`
  /* flex: 1; */
  height: 50vh;

  margin: 15vh 10vw 0 0;
  /* background-image: url("assets/images/welcome-background-4.png"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${tablet({
    // width: "250px",
    height: "30vh",
    // marginBottom: "10rem",
    margin: "5vh 5vw 0 0",
  })}
  ${mobile({
    // width: "120px",
    height: "20vh",
    marginBottom: "5rem",
  })}
`;
export const HomeWelcomeHeader = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 25%;
  margin: auto;
  ${tablet({
    marginTop: "50px",
  })}
  ${mobile({
    marginTop: "40px",
  })}
`;

export const HomeWelcomeImgHeader = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("assets/images/welcome-statment.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const scrollAnimation = keyframes`
 0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top:90%;
    }
`;

export const HomeWelcomeScrool = styled.div`
  margin-top: 20px;
  width: 30px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50px;
  position: relative;

  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    border: 2px solid black;
    height: 10px;
    width: 10px;
    transform: translate(-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: ${scrollAnimation} 1s ease-in-out infinite;
  }
  &::after {
    top: 30%;
    animation-delay: 0.3s;
  }
`;
