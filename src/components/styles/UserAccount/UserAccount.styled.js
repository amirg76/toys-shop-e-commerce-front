import styled, { css } from "styled-components";
import { mobile, tablet } from "../../../responsive";
import { Link } from "react-router-dom";
export const UserAccountMainCountiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 25vh;
  ${tablet({
    marginTop: "15vh",
  })};
`;
export const UserAccountMainHeader = styled.h1``;
export const UserAccountProfileHeader = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid rgb(224, 224, 224);
  /* background-color: yellow; */

  /* ${tablet({
    flexDirection: "column",
  })} */
`;
export const UserAccountProfileHeaderName = styled.h3`
  padding-right: 1rem;
`;

export const UserAccountProfileLink = styled(Link)`
  /* text-decoration: none; */
  padding: 18px 10px;
  padding-right: 1rem;
  color: black;
  cursor: pointer;
  /* ${tablet({
    display: ({ open }) => (!open ? "flex" : "none"),
  })} */
`;
export const UserAccountTabsCountiner = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: flex-end;
  width: 75%;
  border-bottom: 1px solid rgb(224, 224, 224);
  /* background-color: yellow; */

  ${mobile({
    width: "90%",
  })}
  //////
  display: flex;
  flex-direction: column;
  position: relative;
  /* width: 500px; */
  /* height: 300px; */
  /* background: #f1f1f1; */
  margin: 1.2rem auto;
  word-break: break-all;
  /* border: 1px solid rgba(0, 0, 0, 0.274); */
`;
export const UserAccountTabsBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;
  ${tablet({
    width: "100%",
  })}
  ${mobile({
    fontSize: "0.8rem",
  })}
`;

export const UserAccountTabsButton = styled.div`
  /* border: none; */
`;

const tabBefore = css`
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(88, 147, 241);
  }
`;
const tabHover = css`
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.274);
    border-bottom: none;
    color: rgb(88, 147, 241);
  }
`;
export const UserAccountTabsTab = styled.div`
  padding: 0.5rem 0;
  margin-right: 0.2rem;
  text-align: center;
  justify-content: center;
  width: 70%;
  border: none;
  cursor: pointer;
  display: flex;

  color: ${(props) => (props.active ? "rgb(88, 147, 241)" : "black")};
  border: ${(props) =>
    props.active ? "1px solid rgba(0, 0, 0, 0.274)" : "1px solid white"};
  box-sizing: content-box;
  position: relative;
  outline: none;

  /* ${(props) => props.active && tabBefore} */
  ${(props) => !props.active && tabHover}
  ${mobile({
    width: "100%",
  })};
`;

export const UserAccountTabsTabHeader = styled.h3`
  font-weight: 400;
  ${mobile({
    // fontSize: "1rem",
  })};
`;

export const UserAccountContentCountiner = styled.div`
  display: flex;
  width: 75%;
  /* justify-content: center; */

  overflow-y: ${(props) => (props.popup ? "hidden" : "")};
  /* flex-grow: 1; */
`;
export const UserAccountContentTab = styled.div`
  justify-content: flex-end;

  /* background: white; */
  padding: 20px;

  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? "flex" : "none")};
  ${tablet({
    padding: 0,
  })};
  /* z-index: ${(props) => (props.popup ? "-999" : "1")}; */
`;
export const UserAccountContentHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const UserAccountContentHeaderText = styled.h2``;
export const UserAccountContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  /* z-index: ${(props) => (props.modal ? "-99" : "1")}; */

  /* opacity: ${(props) => (props.modal ? "0.1" : "1")}; ; */
`;

export const UserAccountContentDetailsCountiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const UserAccountContentDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
  ${mobile({
    width: "100%",

    // backgroundColor: "blue",
  })};
`;
export const UserAccountContentDetailsHeader = styled.h3`
  font-weight: 400;
`;
export const UserAccountContentDetailsInput = styled.input`
  margin: 0.5rem 0;
  padding: 1rem 0.5rem 1rem 30rem;
  text-align: right;
  ${tablet({
    // width: "100%",
    backgroundColor: "white",
  })}
  ${mobile({
    // margin: "0 auto",
    padding: "1rem 1rem 1rem 8rem",
    // backgroundColor: "blue",
  })};
`;

export const UserAccountContentButtons = styled.div`
  display: flex;
  margin-top: 2vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.274);
  height: 6vh;
  width: 100%;
  ${tablet({
    width: "100%",
  })}
`;

export const UserAccountContentButtonArea = styled.div`
  display: flex;
  flex: 1;
  height: 5vh;
`;
export const UserAccountContentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  background-color: ${(props) => (props.delete ? "#d9534f" : "#0e518f")};
  color: white;
  font-size: 1rem;
  margin-left: ${(props) => (props.delete ? 0 : "2.5rem")};
  cursor: pointer;
  &:hover {
    border: ${(props) => (props.delete ? "" : "1px solid white")};
    background-color: ${(props) => (props.delete ? "" : "#0080c5")};
  }
  ${mobile({
    width: "100%",
    padding: "0 0.5rem",
    // marginLeft: `${(props) => (props.delete ? 0 : "0.5rem")}`,
  })}
`;

export const UserAccountPersonalInfoPassPopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(49, 49, 49, 0.5);
`;
export const UserAccountPersonalInfoPassPopUpCountiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

export const UserAccountPersonalInfoPassPopUpMain = styled.div`
  top: 40%;
  right: 30%;
  bottom: 30%;
  left: 30%;
  background: #f1f1f1;
  position: absolute;
  display: flex;
  align-items: center;

  flex-direction: column;
`;
export const UserAccountPersonalInfoPassPopUpMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 95%;
  height: 15%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgb(224, 224, 224);
`;
export const UserAccountPersonalInfoPassPopUpMainHeaderText = styled.h3``;
export const UserAccountPersonalInfoPassPopUpMainCurentPass = styled.div`
  display: flex;
  width: 90%;
  margin-top: 2vh;
  /* align-items: flex-end; */
  flex-direction: column;
`;
export const UserAccountPersonalInfoPassPopUpMainPassHeader = styled.div`
  font-size: 400;
  padding: 0.5rem 0;
`;
export const UserAccountPersonalInfoPassPopUpMainCurentPassInput = styled.input`
  margin: 0.5rem 0;
  padding: 1rem 0.5rem 1rem 30rem;
  text-align: right;
`;

export const UserAccountPersonalInfoPassPopUpMainPass = styled.div`
  display: flex;
  justify-content: space-between;

  /* align-items: flex-start; */
  width: 90%;
  margin-top: 2vh;
`;
export const UserAccountPersonalInfoPassPopUpMainPassInput = styled.input`
  padding-left: 0.5rem;
  height: 100%;
  width: 90%;
`;
export const UserAccountPersonalInfoPassPopUpMainPassBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 45%;
`;
export const UserAccountPersonalInfoPassPopUpMainPassInputBlock = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 3rem;

  width: 100%;

  border: 1px solid rgb(224, 224, 224);
`;

export const UserAccountPersonalInfoPassPopUpMainPassInputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  background-color: #a9a9a9;
  height: 100%;
  cursor: pointer;
`;

export const UserAccountPersonalInfoPassPopUpMainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 15%;
  margin-top: 2vh;
  background-color: #0e518f;
  font-size: 1.5rem;
  color: white;
  &:hover {
    border: 1px solid white;
    background-color: #0080c5;
  }
`;
export const UserAccountPersonalInfoPassPopUpMainError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 15%;
  margin-top: 2vh;

  font-size: 1rem;
`;

export const UserAccountLikesImgCountiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 10%;
  height: 15%; */
  margin-top: 2vh;
`;
export const UserAccountLikesImg = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 15%;
  padding: 0.7rem;
`;
