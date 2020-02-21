import { combineReducers } from "redux";
import loading from "./loading";
import popup from "./popup";

const rootReducer = combineReducers({
  loading,
  popup
});

export default rootReducer;
