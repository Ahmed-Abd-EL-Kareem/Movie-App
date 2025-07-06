import { createStore, applyMiddleware } from "redux";
import { MoviesReducer } from "../Reducer/MovieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

export const store = createStore(MoviesReducer, applyMiddleware(thunk));
