const initailState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "김소라"
      },
      content: "첫번째 게시글",
      img:
        "https://review-flatform-common.s3.ap-northeast-2.amazonaws.com/user-bbs/KakaoTalk_20200226_115001378_02.png"
    }
  ],
  imagePaths: []
};

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST
};
export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "제로초"
    }
  }
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPost: [action.data, ...state.mainPosts]
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
