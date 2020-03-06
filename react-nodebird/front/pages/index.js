import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
//import { loginAction } from "./reducers/user";

const Home = () => {
  const { isLoggedIn, user } = useSelector(state => state.user);
  console.log("user", user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
