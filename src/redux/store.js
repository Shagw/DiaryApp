import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { notes } from "./reducers/notereducer";

const reducer = combineReducers({
  notes,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
