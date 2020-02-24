import { combineReducers } from "redux";
import loading from "./loading";
import popup from "./popup";
import gnbAction from "./gnbAction";

const rootReducer = combineReducers({
  loading,
  popup,
  gnbAction
});

export default rootReducer;
