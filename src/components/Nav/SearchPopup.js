import {
  PopupContiner,
  PopupClose,
  HotProductsItemLink,
  PopupItemDetailsAddToCart,
  PopupItemDetailsPrice,
  PopupItemDetailsContainer,
  PopupItemDetailsTitleHeader,
  PopupItemDetailsId,
  PopupItemImgContainer,
  PopupItemImg,
} from "../styles/SearchPopup.styled";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/nav-slice";
import { searchActions } from "../../store/search-slice";
const SearchPopup = ({ products, open }) => {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.search.userInput);
  const isSearchPopupOpen = useSelector(
    (state) => state.search.isSearchPopupOpen
  );
  const handleGoToProduct = (productid) => {};
  const handleCloseAndResetPopUp = () => {
    // setUserInput("");
    dispatch(searchActions.UpdateInput(""));
    handleResetSearchInput();
  };
  const handleResetSearchInput = () => {
    dispatch(searchActions.PopupOpen(false));
    console.log("yes");
  };
  return (
    <PopupContiner>
      {products && products.length > 0 ? (
        <PopupClose onClick={handleCloseAndResetPopUp}>
          <CloseIcon style={{ fontSize: "1rem" }} />
        </PopupClose>
      ) : (
        handleResetSearchInput()
      )}

      {products &&
        products.map(
          (product, index) =>
            index < 5 && (
              <HotProductsItemLink
                to={`/product/${product._id}`}
                key={product._id}
                onClick={() => handleGoToProduct(product._id)}
              >
                <PopupItemDetailsAddToCart>
                  <ShoppingCartOutlinedIcon />
                </PopupItemDetailsAddToCart>
                <PopupItemDetailsPrice>$ {product.price}</PopupItemDetailsPrice>
                <PopupItemDetailsContainer>
                  <PopupItemDetailsId>Ref: {product._id}</PopupItemDetailsId>
                  <PopupItemDetailsTitleHeader>
                    {product.title}
                  </PopupItemDetailsTitleHeader>
                </PopupItemDetailsContainer>
                <PopupItemImgContainer>
                  <PopupItemImg src={product.img} />
                </PopupItemImgContainer>
              </HotProductsItemLink>
            )
        )}
    </PopupContiner>
  );
};

export default SearchPopup;
