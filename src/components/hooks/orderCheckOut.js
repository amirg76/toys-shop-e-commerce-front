import { createOrder } from "../../store/thunk-slice";
export const checkOutHandle = (dispatch, products, cartId, totalPrice) => {
  console.log(products);
  const userId = localStorage.getItem("userid");
  console.log(cartId);
  // let totalCount = counter;
  // let totalCartQuantity = cart.products.length + 1;
  // let totalCartPrice = +(product.price * totalCount + cart.total).toFixed(2);
  // let productsToSend = [...cart.products];

  // if (userId) {
  //   const checkUpdateProduct = checkProduct(product, cart);

  //   if (checkUpdateProduct) {
  //     productsToSend = editProduct(checkUpdateProduct, counter, productsToSend);
  //     totalCount = counter + checkUpdateProduct.productQuantity;
  //     totalCartQuantity = cart.products.length;
  //     totalCartPrice = +(
  //       product.price * (totalCount - checkUpdateProduct.productQuantity) +
  //       cart.total
  //     ).toFixed(2);
  //   }

  if (cartId) addNewOrder(dispatch, products, userId, totalPrice);
  //   else if (checkUpdateProduct)
  //     updateProductInCart(
  //       dispatch,
  //       cart,
  //       totalCartPrice,
  //       totalCartQuantity,
  //       productsToSend,
  //       userId
  //     );
  //   else addToCart(dispatch, product, counter, cart, userId);
  // }
};

const addNewOrder = (dispatch, products, userId, totalPrice) => {
  const productsToSend = products.map((product) => {
    return { productId: product._id, quantity: product.productQuantity };
  });

  const NewOrder = {
    userId,
    products: productsToSend,
    amount: totalPrice,
  };

  dispatch(createOrder(NewOrder));
};
