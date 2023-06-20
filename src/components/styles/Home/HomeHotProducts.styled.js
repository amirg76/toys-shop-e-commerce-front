import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
import { Link } from "react-router-dom";
export const HomeHotProductsContainer = styled.div`
  flex: 2;
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;

  margin-right: ${(props) => props.from === "list" && "10vw"};
  margin-top: ${(props) => props.from === "list" && "15vh"};

  ${tablet({
    width: "100%",
  })}
  ${mobile({
    width: "80%",
    marginRight: "10vw",
  })};
`;
export const HomeHotProductsHeader = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 2rem;
  margin-top: 2rem;
  /* padding: 0 0 0 2vw; */
  text-align: center;
  ${mobile({
    fontSize: "1.5rem",
  })}
`;
export const HomeHotProductsItemHover = styled.div`
  width: 100%;

  height: 100%;
  position: absolute;
  top: 0;
  /* left: 0; */
  /* right: 0; */
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
export const HomeHotProductsItemsContainer = styled.div`
  flex: 1;
  margin: 5px;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &: hover ${HomeHotProductsItemHover} {
    opacity: 1;
  }
`;
export const HomeHotProductsItemCircle = styled.div`
  width: 200px;
  height: 200px;
  z-index: 4;
  border-radius: 50%;
  opacity: 0;
  background-color: white;
  position: absolute;
`;
export const HomeHotProductsItemIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;

    transform: scale(1.1);
  }
`;
export const HomeHotProductsItemImg = styled.img`
  height: 75%;
  z-index: 2;
  padding-bottom: 1rem;
`;

export const HomeHotProductsItemTitle = styled.span`
  height: 100%;
`;
export const HomeHotProductsCard = styled.div`
  position: relative;
  max-width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  text-align: center;
  margin: 1rem 0.5rem;
`;
export const HomeHotProductsItemPrice = styled.h3``;
export const HotProductsItemLinks = styled.div``;

export const HotProductsItemLink = styled(Link)`
  text-decoration: "none";
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const HotProductsItemLinkIcon = styled(Link)`
  text-decoration: "none";
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;

    transform: scale(1.1);
  }
`;
