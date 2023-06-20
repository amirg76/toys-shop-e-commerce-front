import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  width: 80%;
  opacity: ${(props) => (props.isSearchPopupOpen ? "0.2" : "1")};
  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;
export const FooterLeft = styled.div`
  flex: 1;
  display: flex;

  /* padding-bottom: 50px; */
  flex-direction: column;
  /* padding: 0 20px 20px; */
`;
export const FooterCenter = styled.div`
  flex: 1;
  text-align: center;
  ${tablet({
    display: "none",
  })}
`;
export const FooterRight = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
    margin: "20px 0",
    padding: "20px 0",
    backgroundColor: "#fff8f8",
    alignItems: "flex-start",
  })}
`;
export const FooterDesc = styled.p`
  margin: 20px 0px;
  width: 80%;
`;

export const FooterSocialContainer = styled.div`
  display: flex;
`;

export const FooterSocialIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 30px;
`;
export const FooterCenterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const FooterCenterListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const FooterContactItem = styled.div`
  width: 50%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
