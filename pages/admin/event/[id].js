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
  const { START_DATE, END_DATE, MEDIA_URL, EVENT_ID } = props.contents.result;

  return (
    <>
      <Header click="event" />
      <Layout>
        <h2 className="content_tit">공지사항</h2>
        <AdminListDetail results={props} />
        <div>
          <p>기간</p>
          <div>
            <span>{START_DATE}</span>
            <span>~</span>
            <span>{END_DATE}</span>
          </div>
        </div>
        <img src={MEDIA_URL} alt="" />
        <div className="btn_wrap">
          <OpenContainer text="수정" />
          <button className="btn_style" onClick={visibleClick}>
            삭제
          </button>
        </div>
      </Layout>
      <PopupContainer
        path={`/admin/event/edit/${props.contents.result.EVENT_ID}`}
        url="event"
        idNumber={props.contents.result.EVENT_ID}
        event="/event"
      />
      <style jsx>
        {`
          .content_tit {
            padding: 0px 24px;
          }
          .btn_wrap {
            margin-top: 20px;
          }
          img {
            width: 300px;
            display: block;
          }
        `}
      </style>
    </>
  );
};
AdNoticeDetail.getInitialProps = async context => {
  const { id } = context.query;
  console.log(context);

  const res = await axios.get(`http://210.178.144.203:3000/v1/event/${id}`);

  return { contents: res.data };
};

export default AdNoticeDetail;
