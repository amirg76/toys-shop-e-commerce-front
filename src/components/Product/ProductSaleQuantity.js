import {
  ProductSaleQuantityCountiner,
  ProductSaleQuantityButton,
  ProductSaleQuantityTotal,
} from "../styles/Product/Product.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useEffect } from "react";
import { updateCart } from "../../store/thunk-slice";

const ProductSaleQuantity = ({
  productQuantity = false,
  counter,
  setCounter,
  productId = 0,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (productQuantity) {
      const addToCart = {
        cartId: cart.cartId,
        userId: cart.userId,
        total: cart.total.toFixed(2),
        quantity: cart.quantity,
        products: cart.products,
      };
      dispatch(updateCart(addToCart));
    }
  }, [productQuantity, cart.total]);
  const handleDecCounter = () => {
    if (!productQuantity && counter > 1)
      setCounter((preveCount) => preveCount - 1);
    else if (productQuantity > 1)
      dispatch(
        cartActions.decQuantityProduct({
          id: productId,
        })
      );
  };

  const handleAddCounter = () => {
    if (!productQuantity) setCounter((preveCount) => preveCount + 1);
    else {
      dispatch(
        cartActions.incQuantityProduct({
          id: productId,
        })
      );
    }
  };
  return (
    <ProductSaleQuantityCountiner>
      <ProductSaleQuantityButton>
        <RemoveIcon onClick={handleDecCounter} />
      </ProductSaleQuantityButton>
      <ProductSaleQuantityTotal>
        {productQuantity ? productQuantity : counter}
      </ProductSaleQuantityTotal>
      <ProductSaleQuantityButton>
        <AddIcon onClick={handleAddCounter} />
      </ProductSaleQuantityButton>
    </ProductSaleQuantityCountiner>
  );
};

export default ProductSaleQuantity;
