import Link from "next/link";

const AdminListItem = ({ lists }) => {
  const { TIT, REG_DATE, BOARD_ID } = lists;
  return (
    <>
      <li className="list_item">
        <Link href="/admin/p/[id]" as={`/admin/p/${BOARD_ID}`}>
          <a>
            <p className="tit">{TIT}</p>
            <p className="date">{REG_DATE}</p>
          </a>
        </Link>

        <style jsx>
          {`
            .list_item {
              padding: 0 26px;
              height: 47px;
              line-height: 47px;
              border-top: 1px solid #e7e7f2;
            }
            .list_item > a {
              display: flex;
              justify-content: space-between;
            }
            .tit {
              width: 925px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .date {
              width: 132px;
              text-align: center;
              font-size: 13px;
            }
          `}
        </style>
      </li>
    </>
  );
};

export default AdminListItem;
