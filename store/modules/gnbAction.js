import { createAction, handleActions } from "redux-actions";

const LIST_DELETE = "action/DELETE";
const NOTICE_BOARD = "action/NOTICE_BOARD";
const EVENT_BOARD = "action/EVENT_BOARD";

export const listDelete = createAction(LIST_DELETE);
export const noticeBoard = createAction(NOTICE_BOARD);
export const eventBoard = createAction(EVENT_BOARD);

const initialState = { url: "board" };

const gnbAction = handleActions(
  {
    [NOTICE_BOARD]: (state, action) => ({
      url: "board"
    }),
    [EVENT_BOARD]: (state, action) => ({
      url: "event"
    })
  },
  initialState
);

export default gnbAction;
