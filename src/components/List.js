import Item from "./Item";
import { useQuery, gql } from "@apollo/client";
import { FETCH_TODOS } from "./../queries/query";

const List = () => {
  const { data, error, loading } = useQuery(FETCH_TODOS);

  if (error) return <p>Oops! something went wrong</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.todos.map((todo) => (
        <Item data={todo} />
      ))}
    </div>
  );
};

export default List;
