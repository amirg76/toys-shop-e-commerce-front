import styled from "styled-components";
import Slider from "react-slick";
import { mobile, tablet } from "../../../responsive";
export const HomeSliderSlide = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 2vh;
`;

export const HomeSliderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 10vh;
  ${tablet({
    // width: ({ open }) => open && "100vw",
    flexDirection: "column",
    // marginTop: 0,
  })}
  ${mobile({
    marginTop: 0,
  })}
`;

export const HomeSliderImgContainer = styled.div`
  /* height: 80%; */
  padding: 200px 0 0 200px;
  flex: 1;
  ${tablet({
    paddingLeft: "100px",
  })}
  ${mobile({
    paddingLeft: "100px",
  })}
`;
export const HomeSliderImg = styled.img`
  height: 40vh;
  width: 30vw;
  ${tablet({
    height: "25vh",
    width: "40vw",
  })}
  ${mobile({
    height: "20vh",
  })}
`;

export const HomeSliderInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  height: 100%;
`;

export const HomeSliderInfoTitle = styled.h1`
  font-size: 3rem;
  ${tablet({
    fontSize: "2rem",
  })}
  ${mobile({
    fontSize: "1.2rem",
  })}
`;

export const HomeSliderInfoDesc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  cursor: pointer;
  ${mobile({
    fontSize: "0.9rem",
    margin: "10px 50px 20px 0",
  })}
`;

export const HomeSliderInfoButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #1f96f4;
  }
  ${mobile({
    fontSize: "0.8rem",
  })}
`;
