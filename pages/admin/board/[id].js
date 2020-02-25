import axios from "axios";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import AdminListDetail from "../../../components/AdminListDetail";
import PopupContainer from "../../../containers/PopupContainer";
import OpenContainer from "../../../containers/OpenContainer";
import { useSelector, useDispatch } from "react-redux";
import { deleteList } from "../../../store/modules/popup";

const AdNoticeDetail = props => {
  const state = useSelector(state => state.popup);
  const dispatch = useDispatch();
  const visibleClick = () => {
    dispatch(deleteList());
  };
  return (
    <>
      <Header click="notice" />
      <Layout>
        <h2 className="content_tit">공지사항</h2>
        <AdminListDetail results={props} />
        <div className="btn_wrap">
          <OpenContainer text="수정" />
          <button className="btn_style" onClick={visibleClick}>
            삭제
          </button>
        </div>
      </Layout>
      <PopupContainer
        path={`/admin/edit/${props.contents.result.BOARD_ID}`}
        url="board"
        idNumber={props.contents.result.BOARD_ID}
        event=""
      />
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
