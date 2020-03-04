import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
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
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
