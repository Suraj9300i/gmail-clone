import { createStore, combineReducers } from "redux";
import { composeReducer, readMailReducer } from "./reducer";

const rootReducer = combineReducers({
  compose: composeReducer,
  readMail: readMailReducer,
});

export const myStore = createStore(rootReducer);
