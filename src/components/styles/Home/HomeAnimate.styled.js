import styled from "styled-components";
import { keyframes } from "styled-components";
import { tablet } from "../../../responsive";
const catAnimation = keyframes`
 0% {
     transform: rotate(0deg);
    }
   
    100% {
      transform: rotate(360deg);
    }
`;

export const HomeAnimateContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin: 3rem auto;
`;
export const AnimateBox = styled.div`
  border: 1px solid black;
  margin: 0 3vw;
  padding: 10px;
  width: 10vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 180%;
    left: 25%;
    background: linear-gradient(#00ccff, #d400d4);
    animation: ${catAnimation} 4s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 16px;
    background: white;
  }
  ${tablet({
    width: "15vw",
    height: "10vh",
  })}
`;
export const HomeAnimateImg = styled.img`
  width: 100%;
  height: 10vh;
  object-fit: contain;
  z-index: 8;
`;
