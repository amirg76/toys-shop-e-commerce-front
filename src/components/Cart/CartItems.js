import { useEffect, useState } from "react";
import {
  CartItemsContainer,
  CartItemContainer,
  CartItemImgContainer,
  CartItemImg,
  CartItemDetailsContainer,
  CartItemDetailsTitle,
  CartItemDetailsTitleHeader,
  CartItemDetailsTitleDelete,
  CartItemDetailsId,
  CartItemDetailsQty,
  CartItemDetailsPrice,
  CartItemDetailsTotal,
} from "../styles/Cart/CartItems.styled";
import ProductSaleQuantity from "../Product/ProductSaleQuantity";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { updateCart } from "../../store/thunk-slice";

const CartItems = ({ products }) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleDeleteProduct = (productid) => {
    const filterItems = cart.products.filter((productItem) => {
      return productItem._id !== productid;
    });
    let totalCartPrice = 0;
    filterItems.length > 0 &&
      filterItems.map((item) => {
        totalCartPrice += item.total_price;
      });

    if (filterItems.length > 0)
      dispatch(cartActions.removeProduct({ filterItems, totalCartPrice }));
    else {
      const addToCart = {
        cartId: cart.cartId,
        userId: cart.userId,
        total: 0,
        quantity: 0,
        products: [],
      };
      dispatch(updateCart(addToCart));
    }
  };

  return (
    <CartItemsContainer>
      {products.map((product) => (
        <CartItemContainer key={product._id}>
          <CartItemImgContainer>
            <CartItemImg src={product.img} />
          </CartItemImgContainer>
          <CartItemDetailsContainer>
            <CartItemDetailsTitleDelete>
              <DeleteIcon onClick={() => handleDeleteProduct(product._id)} />
            </CartItemDetailsTitleDelete>
            <CartItemDetailsTitle>
              <CartItemDetailsTitleHeader>
                {product.title}
              </CartItemDetailsTitleHeader>
            </CartItemDetailsTitle>
            <CartItemDetailsId>Ref: {product._id}</CartItemDetailsId>
            <CartItemDetailsQty>
              <ProductSaleQuantity
                productQuantity={product.productQuantity}
                counter={counter}
                setCounter={setCounter}
                productId={product._id}
              />
              <CartItemDetailsPrice>$ {product.price}</CartItemDetailsPrice>
              <CartItemDetailsTotal>
                $ {product.total_price.toFixed(2)}
              </CartItemDetailsTotal>
            </CartItemDetailsQty>
          </CartItemDetailsContainer>
        </CartItemContainer>
      ))}
    </CartItemsContainer>
  );
};

export default CartItems;
