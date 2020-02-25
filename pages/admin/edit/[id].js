import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Router from "next/router";

const Editor = dynamic(() => import("../../../components/editor"), {
  ssr: false
});

const adminEdit = props => {
  const { BOARD_ID, TIT, CONTENT } = props.contents.result;
  const [title, setTitle] = useState(TIT);

  const state = useSelector(state => state.write);

  console.log("state", state.body);
  const onChange = useCallback(
    e => {
      setTitle(e.target.value);
    },
    [title]
  );
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios({
        method: "put",
        url: `http://210.178.144.203:3000/v1/board`,
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJhZG1pbiIsIm1iZXJfa2V5IjoiampjNWJwZ2Mwd3I4IiwiYXV0aG9yIjoiQURNSU4iLCJpYXQiOjE1ODI1OTExOTUsImV4cCI6MTU4MjU5MTQ5NX0.wvQAkCv_DPAHSxlmBr4f_--_s6muABljnpr3wSoJV6g"
        },
        data: {
          board_id: BOARD_ID,
          tit: title,
          content: state.body
        }
      });
      Router.push({ pathname: "/admin/board" });
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
adminEdit.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axios.get(`http://210.178.144.203:3000/v1/board/${id}`);
  return { contents: res.data };
};

export default adminEdit;
