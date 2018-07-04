import * as types from "../constants/actionTypes";
import clothingItems from '../clothing';

export function addToCart(id) {
  const cartItem = clothingItems.find(item => {
    return item.id.toString() === id;
  });

  const newCartItem = {
    id: cartItem.id,
    title: cartItem.title,
    price: cartItem.price,
    img: cartItem.img
  }
  return {
    type: types.ADD_TO_CART,
    newCartItem,
  }
};

export const removeFromCart = (target) => ({
  type: types.REMOVE_FROM_CART,
  target
});

export function submitReview() {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3000/reviews')
    const reviews = await res.json();
    console.log(reviews);
    return;
  }
}