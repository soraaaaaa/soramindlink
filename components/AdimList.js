import AdminListItem from "./AdminListItem";

const AdminList = ({ results }) => {
  return (
    <ul>
      <li className="top_tit">
        <p className="tit">제목</p>
        <p className="date">작성일</p>
      </li>
      {results.list.map(lists => (
        <AdminListItem lists={lists} key={lists.BOARD_ID} />
      ))}
      <style jsx>
        {`
          .content_tit {
            font-size: 26px;
            margin-bottom: 20px;
            font-weight: 400;
          }
          ul {
            border-bottom: 1px solid #b4b4d2;
          }
          .top_tit {
            height: 43px;
            line-height: 43px;
            background-color: #f6f6fb;
            color: #72728b;
            display: flex;
            justify-content: space-between;
            padding: 0 26px;
          }
          .tit {
            width: 925px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: hidden;
          }
          .date {
            width: 132px;
            text-align: center;
            font-size: 13px;
          }
        `}
      </style>
    </ul>
  );
};

export default AdminList;
