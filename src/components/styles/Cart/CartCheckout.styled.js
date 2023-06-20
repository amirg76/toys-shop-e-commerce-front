import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";
export const CartCheckoutContainer = styled.div`
  /* border: 1px solid black; */
  /* flex: 1; */
  width: 40%;
  height: 50%;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1vw;

  ${tablet({
    marginTop: "3vh",
    width: "100%",
  })}/* align-items: flex-start; */
`;
export const CartCheckoutHeader = styled.h2`
  margin: 24px auto;
`;
export const CartCheckoutRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(224, 224, 224);
  width: 80%;
  margin: 0 auto;
`;
export const CartCheckoutRowContainer = styled.div`
  margin: 10px;
`;

export const CartCheckoutRowContent = styled.h3`
  flex: 1;

  /* color: #707070; */
  /* margin: auto; */
`;
export const CartCheckoutRowTotal = styled.h1``;

export const CartCheckoutRowButton = styled.button`
  margin: 4vh 0;
  padding: 16px;
  width: 100%;
  background-color: #01bf5d;
  color: white;
  border: 2px solid #01bf5d;
  border-radius: 30px;
  cursor: pointer;
`;

export const CartCheckoutPopUpCountiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;
export const CartCheckoutPopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(49, 49, 49, 0.5);
  overflow-y: ${(props) => (props.popup ? "hidden" : "")};
`;
export const CartCheckoutPopUpMain = styled.div`
  top: 40%;
  right: 30%;
  bottom: 40%;
  left: 30%;
  background: #f1f1f1;
  position: absolute;
  display: flex;
  align-items: center;

  flex-direction: column;
`;
export const CartCheckoutPopUpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 95%;
  height: 25%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

export const CartCheckoutPopUpText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 100%;
`;
// export const CartCheckoutPopUpMainHead = styled.h1``;
