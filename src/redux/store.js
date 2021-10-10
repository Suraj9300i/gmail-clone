import { createStore, combineReducers } from "redux";
import { composeReducer } from "./reducer";

const rootReducer = combineReducers({
  compose: composeReducer,
});

export const myStore = createStore(rootReducer);
