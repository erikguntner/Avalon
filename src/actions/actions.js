import * as types from "../constants/actionTypes";
import clothingItems from '../clothing';

export function addToCart(cart, cartTotal, id) {

  let newCartTotal = cartTotal;
  newCartTotal += 1;

  const cartItem = clothingItems.find(item => {
    return item.id.toString() === id;
  });

  const newCartItem = {
    id: cartItem.id,
    title: cartItem.title,
    price: cartItem.price,
    img: cartItem.img
  }

  const newCart = cart.slice();
  newCart.push(newCartItem);

  return {
    type: types.ADD_TO_CART,
    newCartItem,
    newCart,
    newCartTotal
  }
};


export function removeFromCart(target, cart, cartTotal) {
  const newCart = cart.slice();
  const index = newCart.findIndex(item => {
    return item.id === target;
  });

  newCart.splice(index, 1);
  let newCartTotal = cartTotal;
  newCartTotal -= 1;

  return {
    type: types.REMOVE_FROM_CART,
    newCart,
    newCartTotal
  }
};

export function setReviews(reviews, fetchedReviews) {

  return {
    type: types.SET_REVIEWS,
    fetchedReviews
  }
}

export function submitReview(reviews, text, id, author) {

  const message = {
    id: parseInt(id),
    createdBy: author,
    message: text
  }
  return async function (dispatch) {
    const res = await fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
    const updatedReview = await res.json();
    const filteredReviews = reviews.filter(review => review.id.toString() === id.toString());
    filteredReviews.push(updatedReview);

    return dispatch({
      type: types.SUBMIT_REVIEW,
      filteredReviews
    });
  }
}
