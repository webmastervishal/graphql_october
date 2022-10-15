import { useMutation } from "@apollo/client";
import { UPDATE_TODO, FETCH_TODOS } from "./../queries/query";

const Item = (props) => {
  const [updateTodo, { data, error, loading }] = useMutation(UPDATE_TODO);

  const handleUpdateTodo = () => {
    updateTodo({
      variables: {
        id: props.data.id,
      },
      refetchQueries: [
        {
          query: FETCH_TODOS,
        },
      ],
    });
  };

  if (error) return <p>Oops! something went wrong</p>;
  if (loading) return <p>loading...</p>;

  return (
    <div id="item">
      <p>{props.data.status ? <s>{props.data.title}</s> : props.data.title} </p>
      {!props.data.status && (
        <button className="item-button" onClick={handleUpdateTodo}>
          Done
        </button>
      )}
    </div>
  );
};

export default Item;
