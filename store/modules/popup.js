import { createAction, handleActions } from "redux-actions";

const SHOW = "popup/SHOW";
const HIDE = "popup/HIDE";
const DELETE_LIST = "popup/DELETE_LIST";

export const show = createAction(SHOW);
export const hide = createAction(HIDE);
export const deleteList = createAction(DELETE_LIST);

const initialState = { visible: false, type: 1 };

const popup = handleActions(
  {
    [SHOW]: (state, action) => ({
      visible: true,
      type: 1
    }),
    [HIDE]: (state, action) => ({ ...state, visible: false }),
    [DELETE_LIST]: (state, action) => ({
      visible: true,
      type: 2
    })
  },
  initialState
);

export default popup;
