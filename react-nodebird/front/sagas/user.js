import { fork, all, put, delay, takeEvery, call } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios";

function loginAPI() {
  return axios.post("/login");
}

function* login() {
  try {
    //yield call(loginAPI);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post("/login");
}

function* signUp() {
  try {
    //yield call(signUpAPI);
    yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
