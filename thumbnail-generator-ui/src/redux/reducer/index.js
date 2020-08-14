import userLoggedData from "./userLoggedData";
import {combineReducers} from "redux";

const allReducer = combineReducers({
  userData: userLoggedData,
});

export default allReducer;
