import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const makeStore = (context) =>
  createStore(rootReducer, applyMiddleware(...middlewares));

const wrapper = createWrapper(makeStore, {
  debug: true,
});

export default wrapper;
