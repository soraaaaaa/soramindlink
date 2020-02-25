import { createAction, handleActions } from "redux-actions";

const WRITE = "action/WRITE";

export const write = createAction(WRITE);

const initialState = { content: "" };

const Action = handleActions(
  {
    [WRITE]: (state, action) => ({
      content: "board"
    })
  },
  initialState
);

export default gnbAction;
