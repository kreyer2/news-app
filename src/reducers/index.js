import {combineReducers} from "redux";
import {newsReducer} from "./news";
import {authReducer} from "./auth";

export const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer
});