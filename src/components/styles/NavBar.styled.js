import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet, mobile } from "../../responsive";

export const NavContainer = styled.nav`
  position: fixed;
  top: 2vh;
  left: 0;
  right: 0;

  z-index: 99;
  width: 100%;
  /* height: 15vh; */
  padding: 0 50px;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f96f4;

  ${tablet({
    flexDirection: ({ open }) => (open ? "column" : "row"),

    // position: ({ open }) => (open ? "fixed" : "relative"),

    height: ({ open }) => (open ? "100%" : "8rem"),

    transition: ({ open }) => open && "1s",
    top: 0,
    zIndex: 10,

    justifyContent: ({ open }) => (open ? "flex-start" : "center"),
  })}
  ${mobile({
    width: ({ open }) => open && "100vw",

    /////
    flexDirection: ({ open }) => (open ? "column" : "row"),

    // position: ({ open }) => (open ? "fixed" : "relative"),

    height: ({ open }) => (open ? "100%" : "5rem"),

    transition: ({ open }) => open && "1s",

    zIndex: 10,

    justifyContent: ({ open }) => (open ? "flex-start" : "center"),
  })}
`;

export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    padding: 18px 10px;
    color: white;
    cursor: pointer;
  }
  ${tablet({
    flexDirection: ({ open }) => (open ? "column" : "row"),
    padding: 0,
    // alignItems: "center",
    // width: "100%",

    display: ({ open }) => (open ? "flex" : "none"),
  })}
`;

export const NavLogoContainer = styled.div`
  padding: 15px 0;

  li {
    cursor: pointer;
    list-style: none;
  }
  ${tablet({
    display: ({ open }) => (!open ? "flex" : "none"),
  })}
`;
export const NavLink = styled(Link)`
  text-decoration: none;
`;
export const NavRightLink = styled(Link)`
  text-decoration: none;
  padding: 18px 10px;
  color: white;
  cursor: pointer;
  ${tablet({
    display: ({ open }) => (!open ? "flex" : "none"),
  })}
`;
export const NavBadgeContainer = styled.div`
  display: flex;
  align-items: flex-end;

  ${tablet({
    position: "absolute",
    top: "2vh",
    left: "10vw",
    display: ({ open }) => (!open ? "flex" : "none"),
  })};
  ${mobile({
    top: "1vh",
  })};
`;

export const NavLogo = styled.h2`
  padding-right: 10px;
  margin: 0;
`;

export const NavLogoSpan = styled.span`
  color: ${(props) => props.color};
  font-family: ${(props) => props.fm};
  font-size: ${(props) => props.fs}; ;
`;
export const NavSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${tablet({
    marginLeft: 0,
    display: ({ open }) => (open ? "flex" : "none"),
  })}
`;

export const NavSearchInput = styled.input`
  border-radius: 25px;
  border: none;
  padding: 15px;
  width: 50vw;
  outline: none;

  ::placeholder {
    color: gray;
    opacity: 1;
  }
  ${tablet({
    padding: "10px",
  })}
`;

export const NavSearchButton = styled.button`
  margin-left: -2.5rem;
  background: none;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const NavMenuItem = styled.div`
  display: flex;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  text-align: center;
  ${tablet({
    marginLeft: 0,
  })}
`;

export const NavBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 45px;
  right: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  z-index: 13;
  display: none;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  ${tablet({
    display: "flex",
  })}
  ${mobile({
    display: "flex",
    top: "25px",
  })}
`;

export const NavRightUserInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const NavRightLogOut = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavRightAccountText = styled.div`
  padding: 0 10px;
`;
export const NavRightAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-left: 1rem;
  color: white;
  ${tablet({
    paddingLeft: 0,
  })}
`;
