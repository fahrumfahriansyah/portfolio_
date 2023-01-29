import { combineReducers } from "redux";
import global from "./global";
import dataTech from "./dataTech";
const reducer = combineReducers({ global, dataTech })

export default reducer