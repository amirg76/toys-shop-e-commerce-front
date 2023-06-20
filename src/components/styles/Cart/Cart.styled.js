import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";

export const CartPageMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${tablet({
    height: "100%",
  })}/* ${mobile({
    height: "100%",
  })} */
`;
export const CartPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 10vh;
  /* margin: auto; */
  align-items: flex-start;
  justify-content: center;
  background-color: aliceblue;

  opacity: ${(props) => (props.isSearchPopupOpen ? "0.2" : "1")};
`;
export const CartContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${tablet({
    width: "90%",
  })}
`;
export const CartHeader = styled.h1`
  margin: 2vh 0;
`;
