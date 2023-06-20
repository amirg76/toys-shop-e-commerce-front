import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";
export const PopupContiner = styled.div`
  position: fixed;
  top: 15%;
  left: 22%;
  width: 50vw;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
  ${tablet({
    top: "11%",
    left: "26%",
  })}
  ${mobile({
    top: "20%",
    left: "10%",
    width: "80vw",
  })}
`;
export const PopupClose = styled.div`
  margin: 1rem;
  align-self: flex-start;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: #ede9e9;
  cursor: pointer;
  ${tablet({
    padding: "0.3rem",
    marginBottom: "0",
  })}
`;

export const HotProductsItemLink = styled(Link)`
  text-decoration: "none";
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  width: 95%;
  /* margin: 0 1rem; */
  cursor: pointer;
  /* flex: 1; */
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border-radius: 20px; */
  position: relative;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

// export const PopupItemContainer = styled.div`
//   width: 95%;
//   /* margin: 0 1rem; */
//   cursor: pointer;
//   /* flex: 1; */
//   height: 20%;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   /* border-radius: 20px; */
//   position: relative;
//   border-bottom: 1px solid rgb(224, 224, 224);
// `;
export const PopupItemDetailsAddToCart = styled.div`
  margin-right: 1rem;
  background-color: orange;
  width: 10%;
  padding: 0.5rem;
  text-align: center;
  ${tablet({
    width: "6%",
    padding: "0rem",
  })}
  ${mobile({
    width: "8%",
  })}
`;
export const PopupItemDetailsPrice = styled.h3`
  width: 10%;
  ${tablet({
    fontSize: "0.7rem",
  })}
  ${mobile({
    fontSize: "0.5rem",
  })}
`;
export const PopupItemDetailsContainer = styled.div`
  flex: 4;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 1vw;

  &::after {
    content: "";
    background: rgb(224, 224, 224);
    position: absolute;
    top: 10%;
    left: 3%;
    height: 100%;
    width: 1px;
  }
  ${tablet({
    //  flex: 1,
  })}
  ${mobile({
    flex: 5,
  })}
`;
export const PopupItemDetailsTitleHeader = styled.h3`
  ${tablet({
    fontSize: "0.7rem",
    textAlign: "right",
  })}
  ${mobile({
    fontSize: "0.5rem",
  })}
`;
export const PopupItemDetailsId = styled.span`
  /* margin-bottom: 1vh; */

  ${tablet({
    fontSize: "0.7rem",
  })}
  ${mobile({
    fontSize: "0.5rem",
  })}
`;

export const PopupItemImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${tablet({
    flex: "2",
  })}
  ${mobile({
    flex: "3",
  })}
`;

export const PopupItemImg = styled.img`
  padding: 1rem;
  width: 60%;
  height: 20%;
`;
