import styled from "styled-components";
import { mobile, tablet } from "../../../responsive";

export const ProductCountiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${tablet({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;
export const FilterCountiner = styled.div`
  flex: 3;
  background-color: #fff;
  height: 15vh;
  width: 100%;
  max-width: 150px;
  text-align: center;
  margin: 5vh 0 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${tablet({
    display: "none",
    // flexDirection: "row",
    // alignItems: "center",
  })}
`;
export const FilterHeader = styled.span`
  font-size: 18px;
  color: #1d497a;
  margin-bottom: 2vw;
`;
export const FilterSelectCountiner = styled.div`
  color: #1d497a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 2vh 0;
`;
export const FilterSelectText = styled.span``;
export const FilterSelectArrow = styled.span`
  opacity: 0.5;
`;
export const FilterListCountiner = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  width: 100%;
`;
export const FilterListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5vw;
  /* background-color: yellow; */
  width: 100%;
`;
export const FilterListCheckBox = styled.span`
  height: 16px;
  width: 16px;
  border: 1.5px solid #c0c0c0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FilterListItemText = styled.span``;

export const FilterListSmallCountiner = styled.div`
  display: none;
  /* justify-content: center; */
  width: 15vw;
  cursor: pointer;
  ${tablet({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    margin: "5%",
  })};
  ${mobile({
    width: "35vw",
  })};
`;
export const FilterListSmallHeader = styled.h3``;
export const FiltersPageCountiner = styled.div`
  width: 90vw;
  height: 55vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${mobile({
    height: "80vh",
    padding: "1rem 0 0 3rem",
  })};
`;
export const FiltersPageButton = styled.button`
  background-color: #1f96f4;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1rem;
  margin: 2rem 0;
  border-radius: 10px;
  cursor: pointer;
`;
export const FiltersPageBackText = styled.span``;
export const FiltersPageLine = styled.div`
  border: 1px solid rgb(224, 224, 224);
`;

export const FiltersButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  ${tablet({
    // justifyContent: "space-between",
  })};
`;
