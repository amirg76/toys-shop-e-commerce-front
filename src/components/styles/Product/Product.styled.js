import CakeIcon from "@mui/icons-material/Cake";
import ExtensionIcon from "@mui/icons-material/Extension";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { mobile, tablet } from "../../../responsive";

export const ProductMainCountiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
`;
export const ProductMain = styled.div``;
export const ProductCountiner = styled.div`
  display: flex;
  /* align-items: flex-start;
  justify-content: space-around; */
  height: 100%;
  width: 80%;
  margin: auto;
  border-bottom: 1px solid rgb(224, 224, 224);
  ${tablet({
    flexDirection: "column",
  })}
`;

export const BreadcrumbCountiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 10vh;
  width: 80%;
  margin: auto;
  ${tablet({
    height: "5vh",
  })}
`;
export const BreadcrumbContent = styled.div`
  ${mobile({
    fontSize: "0.6rem",
  })}
`;

export const ProductImgCountiner = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgb(224, 224, 224);
`;

export const ProductImg = styled.img`
  /* margin-top: 15vh; */
  height: 100%;
  width: 30vw;
  ${mobile({
    width: "40VW",
  })}
`;

export const ProductSaleCountiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;
  flex: 1;
  height: 100%;

  border-top: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
  ${tablet({
    marginTop: "10vh",
    borderLeft: "none",
  })}
`;

export const ProductSaleTitleCountiner = styled.div`
  padding-left: 2vw;
  /* height: 10%; */
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ProductSaleTitleText = styled.h2`
  ${mobile({
    fontSize: "1.2rem",
  })}
`;

export const ProductSaleTitleImg = styled.div`
  background: url("assets/images/products/lego/LEGO_logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-size: contain; */
  width: 8rem;
  height: 6rem;
  ${tablet({
    width: "6rem",
  })}
  ${mobile({
    backgroundSize: "contain",
  })}
`;

export const ProductSalePriceCountiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 10rem;
  margin-left: 2vw;
`;

export const ProductSalePriceText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ProductSalePriceStock = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 2;
  color: green;
`;

export const ProductSaleQuantityCountiner = styled.div`
  width: 10rem;
  height: 3rem;
  margin-top: 1rem;
  margin-left: 2vw;
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  display: flex;
  justify-content: space-between;

  align-items: center;
  ${mobile({
    height: "2rem",
    width: "5rem",
  })}
`;

export const ProductSaleQuantityTotal = styled.div`
  ${mobile({
    // padding: "0.1rem 0.3rem",
    fontSize: "1rem",
    margin: "0 0.7rem",
  })}
`;

export const ProductSaleQuantityButton = styled.button`
  padding: 0.6rem;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  ${mobile({
    padding: "0.1rem ",
  })}
`;

export const ProductSaleAddButton = styled.button`
  background-color: #01bf5d;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  width: 40%;
  color: white;
  font-size: 16px;
  margin-top: 1rem;
  margin-left: 2vw;
  font-weight: 500;
  cursor: pointer;
  ${mobile({
    width: "70%",
  })}
`;

export const ProductSaleWarning = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-color: rgb(230, 243, 255);
  width: 65%;
  margin: 2vw;

  padding: 1vw;
  /* margin-top: 2vh;
  margin-left: 2vw; */
  ${mobile({
    width: "100%",
    marginTop: "1rem",
  })}
`;

export const ProductSaleShipingTextCountiner = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 65%;
  /* margin: 2vw; */
  /* padding: 1vw; */
  /* margin-top: 1vh; */
  margin-left: 2vw;
  ${mobile({
    width: "100%",
    marginTop: "1rem",
  })}
`;

export const ProductSaleShipingTextButtonTitle = styled.span`
  font-size: 1.1rem;
  color: #008a00;
  font-weight: 400;
  /* margin-right: 20px; */
`;
export const ProductSaleShipingTextButton = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid rgb(224, 224, 224);
  width: 100%;

  /* margin: 2vw; */
  padding: 1vw;
  /* margin-top: 2vh; */
  /* margin-right: 2vw; */
  cursor: pointer;
`;

export const ProductSaleShipingTextContent = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
  /* border-bottom: 1px solid black; */
  padding: 1vw;
  text-align: center;
`;
export const ProductSaleShipingTextContentLine = styled.hr`
  width: 100%;
  margin-top: 2vh;
`;

export const ProductSaleSocialContainer = styled.div`
  /* width: 100%; */
  display: flex;
  margin: 2vh 0 0 2vw;
`;

export const ProductImgDetailsCountiner = styled.div`
  width: 50%;
  height: 15vh;
  display: flex;
  margin-top: 10vh;
  ${tablet({
    marginTop: "5vh",
    height: "13vh",
  })}
`;

export const ProductImgDetailsBox = styled.div`
  /* width: 100%; */
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  flex: 1;

  /* margin: 2vh 0 0 2vw; */
  border-left: 1px solid rgb(224, 224, 224);
  border-right: 1px solid rgb(224, 224, 224);
  /* font-size: 30px; */

  /* background-color: yellow; */
  ${mobile({
    justifyContent: "space-between",
  })}
`;
export const CakeIconCustom = styled(CakeIcon)`
  && {
    color: green;
    font-size: 4rem;
    ${mobile({
      fontSize: "3.5rem",
    })}
  }
`;
export const ExtensionIconCustom = styled(ExtensionIcon)`
  && {
    color: green;
    font-size: 4rem;
    ${mobile({
      fontSize: "3.5rem",
    })}
  }
`;
export const ProductImgDetailsBoxTitle = styled.span`
  font-size: 16px;
  ${mobile({
    fontSize: "16px",
  })}
`;
export const ProductImgDetailsBoxNumber = styled.h2`
  ${mobile({
    fontSize: "16px",
  })}
`;

export const ProductSaleAboutContainer = styled.div`
  width: 60%;
  /* height: 15vh; */
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  align-items: flex-start;
  margin: 3vh 0 3vh 2vw;
  /* margin: 2vh 0 0 2vw; */
  /* background-color: blue; */
  ${tablet({
    width: "100%",
  })}
`;
export const ProductSaleAboutHeader = styled.h3``;
export const ProductSaleAboutContent = styled.div``;
export const ProductSaleAboutContentUl = styled.ul`
  padding-left: 1vw;
  margin: 0;
`;
export const ProductSaleAboutContentLi = styled.li`
  margin-bottom: 1vh;
  font-weight: 500;
`;

export const ProductInfoContainer = styled.div`
  /* width: 80%; */
  /* height: 100%; */
  /* margin: auto; */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* background-color: blue; */
`;

export const ProductInfoHeader = styled.h3`
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid rgb(224, 224, 224);
`;
export const ProductInfoContent = styled.div`
  width: 100%;
  /* height: 100%; */
  /* margin: auto; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ProductInfoContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  padding-left: 1vw;
`;
export const ProductInfoContentTitle = styled.div`
  background-color: #f3f3f3;
  flex: 1;
  padding: 0.3vw 2vw;
  border: 1px solid rgb(224, 224, 224);
`;
export const ProductInfoContentText = styled.div`
  flex: 1;
  padding: 0.3vw 2vw;
  border: 1px solid rgb(224, 224, 224);
  border-right: 0;
  /* background-color: gray; */
`;

export const ProductInfoDescContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin: 1vh auto 5vh;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
export const ProductDescContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  padding-left: 5vw;
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ProductDescHeader = styled.h3`
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid rgb(224, 224, 224);
  /* ${tablet({
    margin: "2rem 0 1rem 0",
    borderBottom: "1px solid rgb(224, 224, 224)",
  })} */
`;
export const ProductDescContent = styled.div`
  line-height: 1.5;
`;
export const ProductReviewsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-top: 1px solid rgb(224, 224, 224);
  margin: 1vh 0 5vh 10vw;
  padding-top: 1vh;
  ${tablet({
    width: "80%",
  })}
  ${mobile({
    flexDirection: "column",
  })}
`;
export const ProductReviewsStatics = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ProductReviewsHeaders = styled.h3`
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid rgb(224, 224, 224);
`;
export const ProductReviewsContent = styled.div`
  /* width: 100%; */
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ProductReviewsBarsContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  text-align: center;
  align-items: flex-start;
`;

export const ProductReviewsBarContainer = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: flex-start; */

  align-items: center;
  span {
    margin-right: 2vw;

    flex: 1;
    display: flex;

    /* width: 100%; */
  }

  progress {
    padding: 1rem;
  }
`;

export const ProductReviewsBarTitle = styled.div`
  margin-right: 2vw;
  flex: 1;
  width: 3vw;
  ${tablet({
    width: "10vw",
  })}
  ${mobile({
    width: "25vw",
  })}
`;
export const ProductReviewsContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-right: 2vw;
    width: 100%;
    /* flex: 1; */
  }
  progress {
    padding: 1rem;
  }
`;

export const ProductReviewTopContainer = styled.div`
  /* border: 1px solid gray; */
  width: 100%;
  margin: 1vh auto;

  display: flex;
  flex-direction: column;
  /* text-align: center; */
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductReviewBlockProfile = styled.div`
  /* border: 1px solid gray; */
  width: 20%;
  /* margin: 1vh 0; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
export const ProductReviewBlockTitle = styled.div`
  font-weight: 600;
  /* border: 1px solid gray; */
  width: 100%;
  margin: 1vh 0;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: flex-start;
  ${mobile({
    flexDirection: "column",
  })}
`;
// StarRatingSection;

export const ProductReviewStarRating = styled.div`
  padding-right: 1vw;
`;

export const ProductReviewBlockContent = styled.div`
  /* margin: 1vh 0; */
  /* padding-right: 1vw; */
  ${mobile({
    marginTop: "1rem",
  })}
`;
export const LoadingContainer = styled.div`
  height: 100vh;
`;

const spinnerOne = keyframes`
 0% {
    transform: rotate(0deg);
    border-width: 5px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 5px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 5px;
  }
`;
const spinnerTwo = keyframes`
  0% {
    transform: rotate(0deg);
    border-width: 5px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 5px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 5px;
  }
`;
const spinnerThree = keyframes`
 0% {
    transform: rotate(0deg);
    border-width: 5px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 5px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 5px;
  }
`;
const spinnerforth = keyframes`
  0% {
    transform: rotate(0deg);
    border-width: 5px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 5px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 5px;
  }
`;

export const Loading = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  top: 20vh;
  div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: #187920;
    border-radius: 50%;
    animation: ${spinnerOne} 0.6s linear infinite;
  }
  div:nth-child(2) {
    border: 8px solid transparent;
    border-bottom-color: #187920;
    animation: ${spinnerTwo} 0.6s linear infinite;
  }

  div:nth-child(3) {
    border: 8px solid transparent;
    border-left-color: #187920;
    animation: ${spinnerThree} 0.6s linear infinite;
  }

  div:nth-child(4) {
    border: 8px solid transparent;
    border-right-color: #8cf395;
    animation: ${spinnerforth} 0.6s linear infinite;
  }
`;
