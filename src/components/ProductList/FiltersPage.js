import {
  FiltersPageCountiner,
  FiltersButtons,
  FiltersPageButton,
  FiltersPageBackText,
  FiltersPageLine,
  FilterCountiner,
  FilterHeader,
} from "../styles/ProductList/ProductList.styled";
import ProductListFilter from "./ProductListFilter";
import { selectItems } from "../Data/FilterData";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FiltersPage = ({ setIsFiltersOpen, isFiltersOpen }) => {
  return (
    <>
      <FiltersPageCountiner>
        <FiltersButtons>
          <FiltersPageButton onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
            <ArrowBackIcon />
            <FiltersPageBackText>BACK</FiltersPageBackText>
          </FiltersPageButton>
          <FiltersPageButton>APPLAY FILTER</FiltersPageButton>
        </FiltersButtons>
        {/* <FilterCountiner> */}
        <FilterHeader>Filters</FilterHeader>
        {selectItems.map((item) => (
          <ProductListFilter key={item.id} item={item} />
        ))}

        {/* </FilterCountiner> */}
      </FiltersPageCountiner>
      <FiltersPageLine />
    </>
  );
};

export default FiltersPage;
