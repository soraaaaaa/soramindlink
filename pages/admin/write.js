import Header from "../../components/Header";
import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import axios from "axios";

const Editor = dynamic(() => import("../../components/editor"), {
  ssr: false
});

const write = () => {
  const [title, setTitle] = useState("");
  const [writeContents, setWriteContents] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

  const onChange = useCallback(
    e => {
      setTitle(e.target.value);
    },
    [title]
  );
  const onSubmit = async () => {
    try {
      await axios({
        method: "post",
        url: `http://210.178.144.203:3000/v1/board`,
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJhZG1pbiIsIm1iZXJfa2V5IjoiampjNWJwZ2Mwd3I4IiwiYXV0aG9yIjoiQURNSU4iLCJpYXQiOjE1ODI0NzI0NjYsImV4cCI6MTU4MjQ3Mjc2Nn0.V9NgF04cC2XrUr80BrmoGlD6VQ_Y3LPcoaBaFDwbjIk"
        },
        data: {
          tit: title,
          content: writeContents
        }
      });
      Router.push({ pathname: `/admin/board` });
    } catch (e) {
      alert("오류가 발생하였습니다");
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <h2 className="content_tit">새 글 작성</h2>
        <form onSubmit={onSubmit}>
          <div className="input_wrap">
            <h3>제목</h3>
            <input
              type="text"
              className="tit_input"
              onChange={onChange}
              value={title}
            />
          </div>
          <Editor content="" />
          <button tpye="submit" className="btn_style">
            저장
          </button>
        </form>
      </Layout>
      <style jsx>
        {`
          .btn_style {
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
};

export default write;
