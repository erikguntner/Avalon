import * as types from "../constants/actionTypes";

export function addToCart(id, clothingList, cart, cartTotal, size) {

  let newCartTotal = cartTotal;
  newCartTotal += 1;

  const cartItem = clothingList.find(item => {
    return item._id.toString() === id;
  });

  const newCartItem = {
    id: id,
    title: cartItem.title,
    size: size,
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

export function getGarment(garmentId) {
  return async function (dispatch) {
    const result = await fetch(`http://localhost:3000/clothes/id?id=${garmentId}`);
    const fetchedGarment = await result.json();

    return dispatch({
      type: types.GET_GARMENT,
      fetchedGarment
    })
  }
}


export function setClothes() {
  return async function (dispatch) {
    const result = await fetch('http://localhost:3000/clothes')
    const fetchedClothes = await result.json();

    return dispatch({
      type: types.SET_CLOTHES,
      fetchedClothes
    })
  }
}

export function setReviews(id) {

  return async function (dispatch) {
    const result = await fetch('http://localhost:3000/reviews')
    const fetchedReviews = await result.json();

    const filteredReviews = fetchedReviews.filter(review => {
      return review.id === id
    })

    return dispatch({
      type: types.SET_REVIEWS,
      filteredReviews
    })
  }
}

export function submitReview(reviews, text, id, author) {

  const message = {
    id: id,
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
