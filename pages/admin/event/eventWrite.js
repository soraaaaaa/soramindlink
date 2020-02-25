import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Router } from "next/router";

const Editor = dynamic(() => import("../../../components/editor"), {
  ssr: false
});

const eventWrite = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

  const state = useSelector(state => state.write);

  const onChange = useCallback(
    e => {
      setTitle(e.target.value);
    },
    [title]
  );
  const onChange2 = useCallback(
    e => {
      setStartDate(e.target.value);
    },
    [startDate]
  );
  const onChange3 = useCallback(
    e => {
      setEndDate(e.target.value);
    },
    [endDate]
  );
  const onChange4 = useCallback(
    e => {
      setMediaUrl(e.target.value);
    },
    [mediaUrl]
  );

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: `http://210.178.144.203:3000/v1/event`,
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJhZG1pbiIsIm1iZXJfa2V5IjoiampjNWJwZ2Mwd3I4IiwiYXV0aG9yIjoiQURNSU4iLCJpYXQiOjE1ODI1MzgyMDYsImV4cCI6MTU4MjUzODUwNn0.PjsLQHae2yTwz_mCZXiozZkXW7VrmAp78bJWLv9LaxQ"
        },
        data: {
          tit: title,
          content: state.body,
          start_date: startDate,
          end_date: endDate,
          media_url: mediaUrl
        }
      });
      Router.push({ pathname: `/admin/event` });
    } catch (e) {
      alert("오류가 발생하였습니다");
    }
  };

  return (
    <>
      <Header click="event" />
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
          <div className="input_box">
            <p>시작 날짜 : </p>
            <input type="date" value={startDate} onChange={onChange2} />
          </div>
          <div className="input_box">
            <p>종료 날짜 : </p>
            <input type="date" value={endDate} onChange={onChange3} />
          </div>
          <div className="input_box">
            <p>이미지 URL : </p>
            <input
              type="text"
              className="url_input"
              value={mediaUrl}
              onChange={onChange4}
            />
          </div>
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
          .input_box {
            display: flex;
            margin-top: 10px;
          }
          .input_box p {
            width: 80px;
          }
          .url_input {
            width: 900px;
          }
        `}
      </style>
    </>
  );
};

export default eventWrite;
