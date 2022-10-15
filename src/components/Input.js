import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { ADD_TODO, FETCH_TODOS } from "./../queries/query";

const Input = () => {
  const [addTodo, { data, error, loading }] = useMutation(ADD_TODO);
  const [todo, setTodo] = useState();

  if (error) return <p>Oops! something went wrong.</p>;
  if (loading) return <p>loading...</p>;

  const handleAddTodo = () => {
    addTodo({
      variables: {
        title: todo,
      },
      refetchQueries: [
        {
          query: FETCH_TODOS,
        },
      ],
    });

    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Input;
