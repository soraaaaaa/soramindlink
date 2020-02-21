const AdminListDetail = ({ results }) => {
  const { TIT, REG_DATE, CONTENT } = results.contents.result;
  return (
    <div>
      <div className="top">
        <strong className="tit">{TIT}</strong>
        <p className="date">{REG_DATE}</p>
      </div>
      <div className="content">{CONTENT}</div>
      <style jsx>
        {`
          .top {
            padding: 0px 24px 20px;
            border-bottom: 1px solid #e7e7f2;
          }
          .tit {
            display: block;
            font-size: 16px;
          }
          .date {
            font-size: 13px;
            color: #acacbf;
          }
          .content {
            padding: 40px 24px 0;
            min-height: 565px;
            box-sizing: border-box;
            border-bottom: 1px solid #e7e7f2;
          }
        `}
      </style>
    </div>
  );
};

export default AdminListDetail;
