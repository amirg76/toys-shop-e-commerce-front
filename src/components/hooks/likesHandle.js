import { createLike, deleteLikes } from "../../store/thunk-slice";

export const likesHandle = (dispatch, item, userId, stateLikes) => {
  let checkLikes = [];
  if (stateLikes.length > 0) {
    checkLikes = stateLikes.filter((like) => {
      if (like.productId === item._id) return like._id;
    });
  }

  if (stateLikes.length === 0 || checkLikes.length === 0) {
    addNewLike(item, userId, dispatch);
  }

  if (checkLikes.length > 0) {
    dispatch(deleteLikes(checkLikes[0]));
  }
};

const addNewLike = (item, userId, dispatch) => {
  const newLike = {
    userId,
    productId: item._id,
    price: item.price,
    shortTitle: item.shortTitle,
    img: item.img,
  };
  dispatch(createLike(newLike));
};

export const checkIsLikes = (stateLikes, item) => {
  let checkLikes = [];
  if (stateLikes.length > 0) {
    checkLikes = stateLikes.filter((like) => {
      if (like.productId === item._id) return like._id;
    });
  }
  return checkLikes;
};
