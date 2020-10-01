import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { clearItemFromCart , removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = { hidden: true, cartItems: [] };
function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(
          action.payload,
          state.cartItems
        ),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(
          action.payload,
          state.cartItems
        ),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(
          action.payload,
          state.cartItems
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;
