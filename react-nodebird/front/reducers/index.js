import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootRducer = combineReducers({
  user,
  post
});

export default rootRducer;
