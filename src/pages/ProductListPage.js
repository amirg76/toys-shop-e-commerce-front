import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import {
  ProductCountiner,
  FilterHeader,
  FilterCountiner,
} from "../components/styles/ProductList/ProductList.styled";
import HomeHeader from "../components/Home/HomeHeader";
import NavBar from "../components/Nav/NavBar";
import HomeHotProducts from "../components/Home/HomeHotProducts";
import HomeNewsLetter from "../components/Home/HomeNewsLetter";
import Footer from "../components/Footer";
import { selectItems } from "../components/Data/FilterData";
import ProductListFilter from "../components/ProductList/ProductListFilter";
import FilterListSmall from "../components/ProductList/FilterListSmall";
import FiltersPage from "../components/ProductList/FiltersPage";
const ProductListPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { category } = useParams();

  return (
    <>
      {isFiltersOpen ? (
        <FiltersPage
          setIsFiltersOpen={setIsFiltersOpen}
          isFiltersOpen={isFiltersOpen}
        />
      ) : (
        <ProductCountiner>
          <FilterListSmall
            setIsFiltersOpen={setIsFiltersOpen}
            isFiltersOpen={isFiltersOpen}
          />
          <FilterCountiner>
            <FilterHeader>Filters</FilterHeader>
            {selectItems.map((item) => (
              <ProductListFilter key={item.id} item={item} />
            ))}
          </FilterCountiner>

          <HomeHotProducts from="list" category={category} />
        </ProductCountiner>
      )}
      {!isFiltersOpen && (
        <>
          <HomeNewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductListPage;
