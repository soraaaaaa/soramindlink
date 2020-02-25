import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, value => ({
  value
}));

const initialState = {
  title: "",
  body: ""
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { value } }) => ({
      body: value
    })
  },
  initialState
);

export default write;
