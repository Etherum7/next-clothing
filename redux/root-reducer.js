import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";

let rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
const isServer = typeof window === "undefined";

if (!isServer) {
  const persistConfig = {
    key: "root",
    whitelist: ["cart"], // make sure it does not clash with server keys
    storage,
  };
  rootReducer = persistReducer(persistConfig, rootReducer);
}

export default rootReducer;
