const initialState = {
  isLoggedId: false,
  user: {}
};

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const loginAction = {
  type: LOG_IN,
  data: {
    naickname: "제로초"
  }
};

const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loginAction: {
      return {
        ...state,
        isLoggedId: true,
        user: action.data
      };
    }
    case logoutAction: {
      return {
        ...state,
        isLoggedId: false,
        user: null
      };
    }
    default:
      return state;
  }
};

export default reducer;
