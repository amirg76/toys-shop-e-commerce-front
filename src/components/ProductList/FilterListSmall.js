import {
  FilterListSmallCountiner,
  FilterListSmallHeader,
} from "../styles/ProductList/ProductList.styled";
import TuneIcon from "@mui/icons-material/Tune";
const FilterListSmall = ({ setIsFiltersOpen, isFiltersOpen }) => {
  return (
    <FilterListSmallCountiner onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
      <FilterListSmallHeader>Filters</FilterListSmallHeader>
      <TuneIcon />
    </FilterListSmallCountiner>
  );
};

export default FilterListSmall;
