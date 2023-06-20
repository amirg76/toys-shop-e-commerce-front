import { createCart, updateCart } from "../../store/thunk-slice";
export const addBasketHandle = (dispatch, product, counter, cart) => {
  const userId = localStorage.getItem("userid");
  let totalCount = counter;
  let totalCartQuantity = cart.products.length + 1;
  let totalCartPrice = +(product.price * totalCount + cart.total).toFixed(2);
  let productsToSend = [...cart.products];

  if (userId) {
    const checkUpdateProduct = checkProduct(product, cart);

    if (checkUpdateProduct) {
      productsToSend = editProduct(checkUpdateProduct, counter, productsToSend);
      totalCount = counter + checkUpdateProduct.productQuantity;
      totalCartQuantity = cart.products.length;
      totalCartPrice = +(
        product.price * (totalCount - checkUpdateProduct.productQuantity) +
        cart.total
      ).toFixed(2);
    }

    if (!cart.cartId) addNewCart(dispatch, product, counter, cart, userId);
    else if (checkUpdateProduct)
      updateProductInCart(
        dispatch,
        cart,
        totalCartPrice,
        totalCartQuantity,
        productsToSend,
        userId
      );
    else addToCart(dispatch, product, counter, cart, userId);
  }
};

const checkProduct = (product, cart) => {
  return cart.products.find((item) => item._id === product._id);
};

const editProduct = (checkUpdateProduct, counter, productsToSend) => {
  const updateArrayOfProducts = productsToSend.map((item) => {
    let productQuantity = item.productQuantity;
    let total_price = item.total_price;

    if (item._id === checkUpdateProduct._id) {
      productQuantity += counter;
      total_price = item.price * productQuantity;
    }

    return { ...item, productQuantity, total_price };
  });
  return updateArrayOfProducts;
};

const addNewCart = (dispatch, product, counter, cart, userId) => {
  const NewCart = {
    userId,
    total: (product.price * counter).toFixed(2),
    quantity: cart.quantity + 1,
    products: [
      {
        ...product,
        productQuantity: counter,
        total_price: (product.price * counter).toFixed(2),
      },
    ],
  };
  dispatch(createCart(NewCart));
};

const addToCart = (dispatch, product, counter, cart, userId) => {
  const addCart = {
    cartId: cart.cartId,
    userId,
    total: +(product.price * counter + cart.total).toFixed(2),
    quantity: cart.products.length + 1,
    products: [
      ...cart.products,
      {
        ...product,
        productQuantity: counter,
        total_price: (product.price * counter).toFixed(2),
      },
    ],
  };
  dispatch(updateCart(addCart));
};

const updateProductInCart = (
  dispatch,
  cart,
  totalCartPrice,
  totalCartQuantity,
  productsToSend,
  userId
) => {
  const updateInCart = {
    cartId: cart.cartId,
    userId,
    total: totalCartPrice,
    quantity: totalCartQuantity,
    products: productsToSend,
  };
  dispatch(updateCart(updateInCart));
};
