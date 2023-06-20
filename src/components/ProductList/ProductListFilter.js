import { useState } from "react";
import filterSlice from "../../store/filter-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { filterActions } from "../../store/filter-slice";
import {
  FilterSelectCountiner,
  FilterSelectText,
  FilterSelectArrow,
  FilterListCountiner,
  FilterListItem,
  FilterListCheckBox,
  FilterListItemText,
} from "../styles/ProductList/ProductList.styled";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import FilterListSelect from "./FilterListSelect";

let checkBoxsArray = [
  // {
  //   title: "",
  //   obj_id: 0,
  //   active: false,
  // },
];

const ProductListFilter = ({ item }) => {
  const { text, data, id } = item;
  const [filterIsOpen, setFilterIsOpen] = useState(true);
  const [filterListId, setFilterListId] = useState(0);
  const [allFiltersOpen, setallFiltersOpen] = useState(true);
  const [checkBoxsOpen, setCheckBoxsOpen] = useState(false);
  const dispatch = useDispatch();
  const filterItems = useSelector((state) => state.productFilter.items);

  const handleFilterTitleClick = () => {
    setFilterListId(id);
    setFilterIsOpen(!filterIsOpen);
    if (filterIsOpen) {
      setallFiltersOpen(false);
      setFilterListId(0);
    } else setallFiltersOpen(true);
  };

  const handleCheckBoxClick = (item) => {
    let { id, title, filterMin, filterMax } = item;

    dispatch(
      filterActions.changeFilter({
        id,
        title,
        filterMin,
        filterMax,
      })
    );

    setCheckBoxsOpen(!checkBoxsOpen);
  };

  return (
    <>
      <FilterSelectCountiner onClick={handleFilterTitleClick}>
        <FilterSelectArrow>
          {filterIsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </FilterSelectArrow>
        <FilterSelectText>{text}</FilterSelectText>
      </FilterSelectCountiner>
      {(allFiltersOpen || filterListId === id) && (
        <FilterListCountiner>
          {data.map((item) => (
            <FilterListItem
              key={item.id}
              onClick={() => handleCheckBoxClick(item)}
            >
              <FilterListCheckBox>
                <FilterListSelect CheckBoxsArray={filterItems} item={item} />
              </FilterListCheckBox>
              <FilterListItemText>{item.text}</FilterListItemText>
            </FilterListItem>
          ))}
        </FilterListCountiner>
      )}
    </>
  );
};

export default ProductListFilter;
