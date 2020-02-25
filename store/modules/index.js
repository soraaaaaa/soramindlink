import { combineReducers } from "redux";
import loading from "./loading";
import popup from "./popup";
import gnbAction from "./gnbAction";
import write from "./write";

const rootReducer = combineReducers({
  loading,
  popup,
  gnbAction,
  write
});

export default rootReducer;
