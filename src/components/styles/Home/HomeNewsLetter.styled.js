import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
export const HomeNewsLetterContainer = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #f5fbfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.isSearchPopupOpen ? "0.2" : "1")};
  /* ${mobile({
    height: "100%",
  })} */
`;

export const HomeNewsLetterImg = styled.div`
  height: 30%;
  width: 50%;
  background-image: url("assets/images/newsletter.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${tablet({
    width: "20%",
  })}/* ${mobile({
    height: "100%",
  })} */
`;
export const HomeNewsLetterHeader = styled.h1`
  font-size: 3rem;
  margin: 1rem 0;
  ${tablet({
    fontSize: "2rem",
  })}
`;
export const HomeNewsLetterText = styled.span`
  font-size: 1.5rem;
  ${tablet({
    textAlign: "center",
  })}
  ${mobile({
    fontSize: "1rem",
  })}
`;
export const HomeNewsLetterSendContainer = styled.div`
  width: 30vw;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  ${mobile({
    width: "70vw",
  })}
`;
export const HomeNewsLetterSendInput = styled.input`
  flex: 8;
  padding: 10px;
`;

export const HomeNewsLetterSendButton = styled.button`
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
  &&:hover {
    background-color: #8acade;
    color: black;
  }
`;
