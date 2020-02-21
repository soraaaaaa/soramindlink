import ListItem from "./ListItem";

const List = ({ results }) => {
  return (
    <ul className="list_wrap">
      {results.list.map(lists => (
        <ListItem lists={lists} key={lists.BOARD_ID} />
      ))}
    </ul>
  );
};

export default List;
