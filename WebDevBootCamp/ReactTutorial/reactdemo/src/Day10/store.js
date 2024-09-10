import { applyMiddleware, createStore } from "redux";
import { ThunkReducer } from "./ThinkReducer.js";
import thunk from "redux-thunk";

export const store = createStore(ThunkReducer,applyMiddleware(thunk));