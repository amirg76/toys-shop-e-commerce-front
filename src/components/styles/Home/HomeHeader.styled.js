import styled from "styled-components";
import { tablet } from "../../../responsive";
export const HomeHeaderContainer = styled.div`
  /* height: 3vh; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 99;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  ${tablet({
    display: "none",
  })}
`;
