import * as types from "../constants/actionTypes";
import clothingItems from '../clothing';

const initialState = {
  cartTotal: 0,
  cart: [],
  clothingList: clothingItems,
};

const clothingReducer = (state = initialState, action) => {
  let cart;
  let cartTotal;

  switch (action.type) {
    case types.ADD_TO_CART:

      cartTotal = state.cartTotal;
      cartTotal += 1;

      cart = state.cart.slice();
      cart.push(action.newCartItem);

      return {
        cartTotal,
        cart,
      }

    case types.REMOVE_FROM_CART:

      cart = state.cart.slice();
      const index = cart.findIndex(item => {
        return item.id === action.target;
      });
      cart.splice(index, 1);
      cartTotal = state.cartTotal;
      cartTotal -= 1;

      return {
        cartTotal,
        cart
      }

    default:
      return initialState;
  }
};

export default clothingReducer;