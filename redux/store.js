import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const makeConfiguredStore = (rootReducer) =>
  createStore(rootReducer, applyMiddleware(...middlewares));

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    // we need it only on client side

    const store = makeConfiguredStore(rootReducer);

    store.__persistor = persistStore(store);
    
    //! Nasty hack

    return store;
  }
};

const wrapper = createWrapper(makeStore, {
  debug: true,
});

export default wrapper;
