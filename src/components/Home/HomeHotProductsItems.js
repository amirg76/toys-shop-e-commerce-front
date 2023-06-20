import {
  HomeHotProductsItemsContainer,
  HomeHotProductsItemImg,
  HomeHotProductsItemTitle,
  HomeHotProductsItemHover,
  HomeHotProductsItemIcon,
  HomeHotProductsCard,
  HomeHotProductsItemPrice,
  HomeHotProductsItemCircle,
  HotProductsItemLinkIcon,
} from "../styles/Home/HomeHotProducts.styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { likesHandle } from "../hooks/likesHandle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLikesByUser } from "../../store/thunk-slice";
import { checkIsLikes } from "../hooks/likesHandle";
import { addBasketHandle } from "../hooks/addToBasket";
const HomeHotProductsItems = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isLogin, setIsLogin] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const stateLikes = useSelector((state) => state.likes.likesArray);

  useEffect(() => {
    if (stateLikes.length > 0) {
      const checkLikes = checkIsLikes(stateLikes, item);
      if (checkLikes.length > 0) {
        setIsLike(true);
      }
    }
  }, []);
  useEffect(() => {
    const userId = localStorage.getItem("userid");
    if (userId) {
      dispatch(getLikesByUser());
    }
  }, [isLike]);

  const itemClickCart = () => {
    addBasketHandle(dispatch, item, 1, cart);
  };

  const itemClickLike = (event) => {
    const userId = localStorage.getItem("userid");
    console.log(userId);
    if (userId !== null) {
      setIsLogin(true);
      likesHandle(dispatch, item, userId, stateLikes);
      setIsLike(!isLike);
      event.preventDefault();
    } else {
      setIsLogin(false);
    }
  };

  return (
    <HomeHotProductsItemsContainer>
      <HomeHotProductsCard>
        <HomeHotProductsItemImg src={item.img} />
        <HomeHotProductsItemTitle>{item.title}</HomeHotProductsItemTitle>

        <HomeHotProductsItemPrice>${item.price}</HomeHotProductsItemPrice>

        <HomeHotProductsItemHover>
          <HomeHotProductsItemIcon>
            <ShoppingCartOutlinedIcon onClick={itemClickCart} />
          </HomeHotProductsItemIcon>

          <HotProductsItemLinkIcon to={`/product/${item._id}`}>
            <SearchIcon />
          </HotProductsItemLinkIcon>

          <HomeHotProductsItemIcon>
            {!isLogin ? (
              <HotProductsItemLinkIcon to="/login/">
                {isLike ? (
                  <FavoriteIcon
                    style={{ color: "green" }}
                    onClick={itemClickLike}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon onClick={itemClickLike} />
                )}
              </HotProductsItemLinkIcon>
            ) : (
              <HomeHotProductsItemIcon>
                {isLike ? (
                  <FavoriteIcon
                    style={{ color: "green" }}
                    onClick={itemClickLike}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon onClick={itemClickLike} />
                )}
              </HomeHotProductsItemIcon>
            )}
          </HomeHotProductsItemIcon>
        </HomeHotProductsItemHover>
      </HomeHotProductsCard>
    </HomeHotProductsItemsContainer>
  );
};

export default HomeHotProductsItems;
