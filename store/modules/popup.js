import { createAction, handleActions } from "redux-actions";

const SHOW = "popup/SHOW";
const HIDE = "popup/HIDE";

export const show = createAction(SHOW);
export const hide = createAction(HIDE);

const initialState = { visible: false, type: 1 };

const popup = handleActions(
  {
    [SHOW]: (state, action) => ({
      visible: true,
      type: 1
    }),
    [HIDE]: (state, action) => ({ ...state, visible: false })
  },
  initialState
);

export default popup;
