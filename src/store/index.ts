import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from "./reduser";


export const store = createStore(rootReducers, applyMiddleware(thunk))