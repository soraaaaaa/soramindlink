import { useState } from "react";

const ListItem = ({ lists }) => {
  const { TIT, CONTENT, REG_DATE, DAY, TIME_AGO } = lists;
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);
  return (
    <>
      <li className="list">
        <div className="list_inner" onClick={onToggle} open={open}>
          <strong className="list_tit">
            <span>{TIT}</span>
            <div className="new_icon"></div>
          </strong>
          <span className="time">{DAY > 1 ? REG_DATE : TIME_AGO}</span>
          <div className="arrow_icon"></div>
        </div>
        <div className="list_content">{CONTENT}</div>
        <style jsx>
          {`
            .list {
              line-height: 19px;
              letter-spacing: -0.19px;
            }
            .list_inner {
              padding: 14px 56px 14px 16px;
              border-bottom: 1px solid #ededf4;
              position: relative;
              min-height: 69px;
              box-sizing: border-box;
            }
            .list_tit {
              display: flex;
              margin-bottom: 4px;
            }
            .time {
              color: #8b8b8b;
            }
            .list_content {
              min-height: 120px;
              padding: 16px 27px 28px 16px;
              background: #f7f8fb;
              box-sizing: border-box;
              overflow: hidden;
              transition: all 0.5s;
            }
            .arrow_icon {
              width: 14px;
              height: 9px;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 22px;
              background-size: 100% 100%;
              background-image: url(/static/img/arrow.png);
            }
            .new_icon {
              width: 18px;
              height: 18px;
              background-image: url(/static/img/new.png);
              background-size: 100% 100%;
              margin: 1px 0 0 4px;
              display: none;
            }
          `}
        </style>
        <style jsx>{`
          .arrow_icon {
            background-image: ${open == true
              ? "url(/static/img/blue_arrow.png)"
              : "url(/static/img/arrow.png)"};
          }
          .list_content {
            display: ${open == true ? "block" : "none"};
          }
          .new_icon {
            display: ${DAY < 1 ? "block" : "none"};
          }
        `}</style>
      </li>
    </>
  );
};

export default ListItem;
