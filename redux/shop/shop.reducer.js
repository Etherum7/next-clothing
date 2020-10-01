import SHOP_DATA from "./shop.data";
import HYDRATE from "next-redux-wrapper";
const INITIAL_STATE = { collections: SHOP_DATA };

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.currentUser)
        nextState.currentUser = state.currentUser;
      return nextState;
    default:
      return state;
  }
}
export default shopReducer;
