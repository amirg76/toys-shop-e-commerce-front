import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
export const CartItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const CartItemContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  /* flex: 1; */
  height: 25vh;
  display: flex;
  background-color: white;
  border-radius: 20px;
  position: relative;
  ${tablet({
    height: "15vh",
  })}
  ${mobile({
    height: "42vh",
  })}
`;

export const CartItemImgContainer = styled.div`
  width: 20%;
  ${mobile({
    width: "40%",
  })}
`;
export const CartItemImg = styled.img`
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
  height: 70%;
`;
export const CartItemDetailsContainer = styled.div`
  /* flex: 4; */
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;

  &::after {
    content: "";
    background: rgb(224, 224, 224);
    position: absolute;
    top: 10%;
    left: 0;
    height: 80%;
    width: 1px;
  }
  ${mobile({
    width: "70%",
  })}
`;

export const CartItemDetailsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({
    width: "90%",
  })}
`;
export const CartItemDetailsTitleHeader = styled.h3`
  ${mobile({
    fontSize: "0.9rem",
  })}
`;
export const CartItemDetailsTitleDelete = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  ${mobile({
    right: "0",
  })};
`;

export const CartItemDetailsId = styled.span`
  margin-bottom: 1vh;
  ${mobile({
    fontSize: "0.9rem",
  })}
`;
export const CartItemDetailsQty = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  padding-top: 2vh;
  /* background-color: aqua; */
  ${tablet({
    width: "100%",
  })}
  ${mobile({
    fontSize: "0.7rem",
    width: "100%",
    flexDirection: "column",
  })}
`;
export const CartItemDetailsPrice = styled.h4`
  /* margin-bottom: 1vh; */

  color: #707070;
  ${tablet({
    marginTop: "0.5vh",
  })}
  ${mobile({
    margin: "1rem 0 1rem 1rem",
  })}
`;
export const CartItemDetailsTotal = styled.h2`
  /* margin-bottom: 1vh; */

  ${tablet({
    marginTop: "0.5vh",
  })}
  ${mobile({
    fontSize: "1rem",
    margin: "0 0 1rem 1rem",
  })};
`;
