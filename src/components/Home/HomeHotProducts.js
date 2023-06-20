import { useState, useEffect } from "react";
import { loadingActions } from "../../store/loading-slice";
import { API } from "../../Api/Api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { HomeHotProductsFilter } from "./HomeHotProductsFilter";
import {
  HomeHotProductsContainer,
  HotProductsItemLinks,
} from "../styles/Home/HomeHotProducts.styled";
import { checkIsLikes } from "../hooks/likesHandle";
import HomeHotProductsItems from "./HomeHotProductsItems";
import LoadingPage from "../../pages/LoadingPage";
import { getLikesByUser } from "../../store/thunk-slice";
const HomeHotProducts = ({ products, from, category }) => {
  const dispatch = useDispatch();
  const selectedfilter = useSelector((state) => state.productFilter.items);
  const loading = useSelector((state) => state.loading.active);
  const [items, setItems] = useState(false);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        dispatch(loadingActions.toggle());
        if (category) {
          const { data } = await API.get(`products/?category=${category}`);

          const allFilterd = HomeHotProductsFilter(selectedfilter, data);

          allFilterd.length > 0 || selectedfilter.length > 0
            ? setItems(allFilterd)
            : setItems(data);
        } else {
          setItems(products);
        }
        dispatch(loadingActions.toggle());
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProductByCategory();

    const userId = localStorage.getItem("userid");
    if (userId) {
      dispatch(getLikesByUser());
    }
  }, [products, selectedfilter]);
  return (
    <>
      <HomeHotProductsContainer from={from}>
        {loading ? (
          <LoadingPage />
        ) : (
          items &&
          items.map((item) => (
            <HotProductsItemLinks key={item._id}>
              <HomeHotProductsItems item={item} key={item._id} />
            </HotProductsItemLinks>
          ))
        )}
      </HomeHotProductsContainer>
    </>
  );
};

export default HomeHotProducts;
