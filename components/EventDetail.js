const EventDetail = ({ lists }) => {
  const { TIT, MEDIA_URL, CONTENT } = lists.contents.result;
  return (
    <div className="event_wrap">
      <img src={MEDIA_URL} alt={TIT} className="img" />
      <div className="content">{CONTENT}</div>
      <style jsx>
        {`
          .event_wrap {
            padding: 10px 16px;
          }
          .img {
            display: block;
            border-radius: 8px;
            width: 100%;
          }
          .content {
            margin-top: 14px;
            font-size: 13px;
            line-height: 19px;
            letter-spacing: -0.19px;
          }
        `}
      </style>
    </div>
  );
};

export default EventDetail;
