import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
import { Link } from "react-router-dom";
export const HomeCategoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  ${tablet({
    height: "100%",
  })}
`;

export const HomeCategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5rem;
  ${tablet({
    flexWrap: "wrap",
    width: "100vw",
    alignItems: "flex-start",
    justifyContent: "center",
  })}
  ${mobile({
    width: "100vw",
    margin: "2rem",
  })}
`;
export const HomeCategoriesItemContainer = styled.div`
  border: 1px solid #eee;
  margin: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet({
    width: "40vw",
    margin: "2rem",
  })}
  ${mobile({
    width: "100vw",
  })}
`;

export const HomeCategoriesHeader = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 2rem;
  padding: 20vh 0 0 2vw;
  ${mobile({
    marginTop: "7rem",
    fontSize: "1.5rem",
  })}
`;

export const HomeCategoriesItemImg = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: contain;
`;
export const HomeCategoriesItemTitle = styled.h3`
  font-weight: bold;
  font-size: 1rem;
`;

export const HomeCategoriesItemLink = styled(Link)`
  text-decoration: "none";
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
