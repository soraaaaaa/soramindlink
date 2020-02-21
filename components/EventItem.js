import Link from "next/link";

const EventItem = ({ lists }) => {
  const { TIT, START_DATE, END_DATE, MEDIA_URL, EVENT_ID } = lists;
  return (
    <>
      <li className="event_list" lists={lists}>
        <Link href="/userApp/p/[id]" as={`/userApp/p/${EVENT_ID}`}>
          <a>
            <img src={MEDIA_URL} alt={TIT} className="event_img" />
            <div className="text_wrap">
              <strong className="tit">{TIT}</strong>
              <span>{START_DATE}</span>
              <span className="spacing">-</span>
              <span>{END_DATE}</span>
            </div>
          </a>
        </Link>
        <style jsx>
          {`
            .event_list + .event_list {
              margin-top: 18px;
            }
            .event_img {
              display: block;
              width: 100%;
              border-radius: 8px;
            }
            .tit {
              font-size: 13px;
              line-height: 19px;
              letter-spacing: -0.19px;
              margin: 12px 0 2px 0;
              display: block;
            }
            .text_wrap span {
              font-size: 13px;
              line-height: 19px;
              letter-spacing: -0.19px;
              color: #8b8b8b;
            }
            .spacing {
              padding: 0 3px;
            }
          `}
        </style>
      </li>
    </>
  );
};

export default EventItem;
