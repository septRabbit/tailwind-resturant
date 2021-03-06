import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_ALL_FROM_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "./types";

const incrementQty = (state, cartItem) => {
  const tempCarts = [...state.carts];
  const currItemIndex = tempCarts.findIndex((i) => i.id === cartItem.id);
  const currItem = tempCarts[currItemIndex];
  currItem.quantity++;

  return { ...state, cart: tempCarts };
};

const addItemToCart = (state, cartItem) => {
  const tempCarts = [...state.carts];
  const currItemIndex = tempCarts.findIndex((i) => i.id === cartItem.id);

  const currItem = tempCarts[currItemIndex];
  if (currItemIndex < 0) {
    tempCarts.push({ ...cartItem, quantity: 1 });
  } else {
    currItem.quantity++;
  }

  return { ...state, carts: tempCarts };
};

const decrementQty = (state, cartId) => {
  // const tempCarts = [...state.carts];
  // const currItemIndex = tempCarts.findIndex((i) => i.id === cartId);
  // const currItem = tempCarts[currItemIndex];
  // if (currItem.quantity >= 1) {
  //   currItem.quantity--;
  // }
  // return { ...state, carts: tempCarts };
};

const removeItemFromCart = (state, cartId) => {
  const tempCarts = [...state.carts];
  const currItemIndex = tempCarts.findIndex((i) => i.id === cartId);
  const currItem = tempCarts[currItemIndex];

  if (currItem.quantity >= 1) {
    currItem.quantity--;
  }

  if (currItem.quantity <= 0) {
    tempCarts.splice(currItemIndex, 1);
  } else {
    tempCarts[currItemIndex] = currItem;
  }

  return { ...state, carts: tempCarts };
};

const clearCart = (state) => {
  return { ...state, carts: [] };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeItemFromCart(state, action.payload);
    case CLEAR_ALL_FROM_CART:
      return clearCart(state);
    case INCREMENT_QTY:
      return incrementQty(state, action.payload);
    case DECREMENT_QTY:
      return decrementQty(state, action.payload);
    default:
      return state;
  }
};
