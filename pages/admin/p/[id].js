import axios from "axios";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import AdminListDetail from "../../../components/AdminListDetail";
import { useState } from "react";
import PopupContainer from "../../../containers/PopupContainer";
import OpenContainer from "../../../containers/OpenContainer";

const AdNoticeDetail = props => {
  return (
    <>
      <Header />
      <Layout>
        <h2 className="content_tit">공지사항</h2>
        <AdminListDetail results={props} />
        <div className="btn_wrap">
          <OpenContainer text="수정" />
          <button className="btn_style">삭제</button>
        </div>
      </Layout>
      <PopupContainer path={`/admin/edit/${props.contents.result.BOARD_ID}`} />
      <style jsx>
        {`
          .content_tit {
            padding: 0px 24px;
          }
          .btn_wrap {
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
};
AdNoticeDetail.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axios.get(`http://210.178.144.203:3000/v1/board/${id}`);

  return { contents: res.data };
};

export default AdNoticeDetail;
