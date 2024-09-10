import { createStore } from "redux";
import { BookReducer } from "./BookReducer.js";
import { combineReducers } from "redux";
import { Reducer } from "./CounterExample/Reducer.js";
import { ToDoReducer } from "./ToDoExample.js/ToDoReducer.js";

const rootReducer = combineReducers({
    BookReducer,
    Reducer,
    ToDoReducer
})

export const  BookStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
// second argument to enable redux devtools