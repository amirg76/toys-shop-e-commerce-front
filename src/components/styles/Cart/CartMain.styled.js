import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
export const CartMainContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  display: flex;

  ${tablet({
    flexDirection: "column",
  })}
  ${mobile({
    // height: "50vh",
  })}
`;
