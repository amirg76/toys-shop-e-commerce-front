import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
export const LogSignContainer = styled.div`
  /* height: 48rem; */

  /* min-height: fit-content(100rem);  */
  width: 100vw;
  height: 100vh;
  background: url("assets/images/LogSign-background.jpg") no-repeat;
  background-size: cover;
  /* background-position: center; */
  background-position: 25% 95%;
  display: flex;

  align-items: center;
  justify-content: center;
  ${tablet({
    // height: "89vh",
    backgroundPosition: "55% 75%",
  })}
  ${mobile({
    // maxHeight: "100%",
    backgroundPosition: "60% 75%",
  })}
`;
export const SignForm = styled.div`
  height: 50%;
  opacity: 0.7;
  width: 30vw;
  border: 1px solid black;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 2vw;
  ${tablet({
    width: "50vw",
    marginLeft: "5vw",
    height: "60vh",
  })}
  ${mobile({
    width: "65vw",
    height: "80vh",
    marginLeft: 0,
    marginRight: "20vw",
    marginTop: "10vh",
  })} /* background-color: gray; */
`;
export const LogForm = styled.div`
  height: 40vh;
  opacity: 0.7;
  width: 20vw;
  border: 1px solid black;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 7vw;
  ${tablet({
    width: "50vw",
    marginLeft: "0",
  })}
  ${mobile({
    width: "60vw",
    height: "50vh",
    marginLeft: 0,
    marginRight: "20vw",
  })}
`;
export const LogSignTitle = styled.h1`
  ${mobile({
    fontSize: "1.5rem",
  })}
`;

export const SignInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const LogInputContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  width: 100%;
  flex-direction: column;
  margin-bottom: 2vh;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const SignInput = styled.input`
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 10px;
  ${tablet({
    width: "50vw",
    marginTop: "2rem",
  })}
  ${mobile({
    width: "90%",
    height: "1vh",
    margin: "0.5rem 0",
    // marginLeft: 0,
    // marginRight: "20vw",
  })}
`;
export const LogInput = styled.input`
  width: 100%;
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 10px;
`;
export const LogSignAgreement = styled.span`
  margin: 20px 0;
  font-size: 12px;
`;
export const LogButton = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  font-size: 16px;
  background-color: teal;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export const ErrorMassege = styled.span`
  color: red;
`;

export const SignButton = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  font-size: 16px;
  background-color: teal;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
  ${mobile({
    fontSize: "1rem",
  })}
`;

export const LogLink = styled(Link)`
  margin: 5px 0;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
`;
