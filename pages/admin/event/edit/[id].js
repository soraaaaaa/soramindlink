import Header from "../../../../components/Header";
import Layout from "../../../../components/Layout";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Router from "next/router";

const Editor = dynamic(() => import("../../../../components/editor"), {
  ssr: false
});

const adminEventEdit = props => {
  const {
    EVENT_ID,
    TIT,
    CONTENT,
    START_DATE,
    END_DATE,
    MEDIA_URL
  } = props.contents.result;
  const [title, setTitle] = useState(TIT);
  const [startDate, setStartDate] = useState(START_DATE);
  const [endDate, setEndDate] = useState(END_DATE);
  const [mediaUrl, setMediaUrl] = useState(MEDIA_URL);

  const state = useSelector(state => state.write);

  console.log("state", state.body);
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
        method: "put",
        url: `http://210.178.144.203:3000/v1/event`,
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJhZG1pbiIsIm1iZXJfa2V5IjoiampjNWJwZ2Mwd3I4IiwiYXV0aG9yIjoiQURNSU4iLCJpYXQiOjE1ODI1OTM0ODIsImV4cCI6MTU4MjU5Mzc4Mn0.Si2-IfenVYQf6eanPr4baXi5CLJwF8rTdbKar3KBfE0"
        },
        data: {
          event_id: EVENT_ID,
          tit: title,
          content: state.body,
          media_url: mediaUrl,
          start_date: startDate,
          end_date: endDate
        }
      });
      Router.push({ pathname: "/admin/event" });
    } catch (e) {
      alert(console.log("error", e));
    }
  };

  return (
    <>
      <Header click="notice" />
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
          <Editor content={CONTENT} />
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
adminEventEdit.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axios.get(`http://210.178.144.203:3000/v1/event/${id}`);
  return { contents: res.data };
};

export default adminEventEdit;
