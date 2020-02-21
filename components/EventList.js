import EventItem from "./EventItem";

const EventList = ({ results }) => {
  return (
    <ul>
      {results.list.map(lists => (
        <EventItem lists={lists} key={lists.EVENT_ID} />
      ))}
      <style jsx>
        {`
          ul {
            margin-top: 10px;
            padding: 0 16px;
          }
        `}
      </style>
    </ul>
  );
};

export default EventList;
