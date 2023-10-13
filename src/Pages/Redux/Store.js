import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Reducer } from "./Recucer";
import thunk from "redux-thunk";
import { ProductReducer } from "./Product-Redux/ProductReducer";

const ReducerMain = combineReducers({Reducer,ProductReducer})

export const Store = legacy_createStore(ReducerMain,applyMiddleware(thunk))