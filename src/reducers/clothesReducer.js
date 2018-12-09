import * as types from "../constants/actionTypes";
// import clothingItems from '../clothing';

const initialState = {
  cartTotal: 0,
  currentItem: {},
  cart: [],
  clothingList: [],
  reviews: []
};

const clothingReducer = (state = initialState, action) => {
  let cart;
  let cartTotal;
  let reviews;
  let clothingList;
  let currentItem;

  switch (action.type) {
    case types.ADD_TO_CART:
      cartTotal = action.newCartTotal
      cart = action.newCart
      return {
        ...state,
        cartTotal,
        cart
      }

    case types.REMOVE_FROM_CART:
      cartTotal = action.newCartTotal
      cart = action.newCart
      return {
        ...state,
        cartTotal,
        cart
      }

    case types.SET_CLOTHES:
      clothingList = action.fetchedClothes;
      return {
        ...state,
        clothingList
      }

    case types.GET_GARMENT:
      currentItem = action.fetchedGarment[0];

      return {
        ...state,
        currentItem
      }
    case types.SET_REVIEWS:
      reviews = action.filteredReviews;
      return {
        ...state,
        reviews
      }

    case types.SUBMIT_REVIEW:
      reviews = action.filteredReviews;
      return {
        ...state,
        reviews
      }

    default:
      return initialState;
  }
};

export default clothingReducer;