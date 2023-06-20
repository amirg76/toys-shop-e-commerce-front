import SearchIcon from "@mui/icons-material/Search";
import SearchPopup from "./SearchPopup";
import {
  NavSearch,
  NavSearchInput,
  NavSearchButton,
} from "../styles/NavBar.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import useFetchSearch from "../hooks/useFetchSearch";
import { useEffect, useState } from "react";

import { searchActions } from "../../store/search-slice";
const SearchBar = ({ burgerNavOpen }) => {
  const [userQuery, setUserQuery] = useState("");
  const data = useFetchSearch(userQuery);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.navbar.navIsVisible);
  const userInput = useSelector((state) => state.search.userInput);

  const isSearchPopupOpen = useSelector(
    (state) => state.search.isSearchPopupOpen
  );

  const handleSearch = (event) => {
    dispatch(searchActions.UpdateInput(event.target.value));
    setUserQuery(event.target.value);
    dispatch(searchActions.PopupOpen(true));
  };

  const closeSearch = () => {
    dispatch(searchActions.UpdateInput(""));
  };
  useEffect(() => {
    if (userInput === "") {
      dispatch(searchActions.PopupOpen(false));
    }
  }, [userInput]);
  return (
    <>
      <NavSearch open={open}>
        <NavSearchInput
          placeholder="I'm looking for"
          onChange={handleSearch}
          value={userInput}
        />
        <NavSearchButton>
          <SearchIcon style={{ color: "gray", fontSize: "20px" }} />
        </NavSearchButton>
      </NavSearch>

      {isSearchPopupOpen &&
        userInput !== "" &&
        data &&
        (!open || burgerNavOpen) && <SearchPopup products={data} open={open} />}
    </>
  );
};

export default SearchBar;
