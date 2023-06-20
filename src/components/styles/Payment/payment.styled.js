import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
export const PayContainer = styled.div`
  /* height: 48rem; */

  /* min-height: fit-content(100rem);  */
  width: 100vw;
  height: 82vh;
  background: url("assets/images/LogSign-background.jpg") no-repeat;
  background-size: cover;
  /* background-position: center; */
  background-position: 25% 95%;
  display: flex;

  align-items: center;
  justify-content: center;
  ${tablet({
    // height: "89vh",
    backgroundPosition: "50% 75%",
  })}
  ${mobile({
    // maxHeight: "100%",
    backgroundPosition: "60% 75%",
  })}
`;
export const PayButton = styled.button`
  /* width: 100%; */
  border: none;
  padding: 10px;
  font-size: 16px;
  background-color: teal;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
`;
