import { all, call } from "redux-saga/effects";
import user from "./user";
import post from "./post";
console.log('re');
export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
