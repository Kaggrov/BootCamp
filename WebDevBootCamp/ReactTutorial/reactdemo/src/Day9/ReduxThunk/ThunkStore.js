import { applyMiddleware, createStore } from "redux";
import { ThunkReducer } from "./ThunkReducer.js";
import thunk from "redux-thunk";


export const ThunkStore =  createStore(ThunkReducer,applyMiddleware(thunk))