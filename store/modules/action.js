import { createAction, handleActions } from "redux-actions";

const LIST_DELETE = "action/DELETE";
const NOTICE = "action/NOTICE";
const EVENT = "action/EVENT";

export const listDelete = createAction(LIST_DELETE);
export const notice = createAction(NOTICE);
export const event = createAction(EVENT);

const initialState = { url: "board" };
