import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const todoStore = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
