import React, { useContext } from "react";
import { Context as TodoContext } from "../context/TodoContext";
import { deleteTodos } from "../actions/TodoActions";

const TodoList: React.FC = () => {
  const {
    state: { todo },
    dispatch
  } = useContext(TodoContext);

  const deleteHandler = (id: string) => dispatch(deleteTodo(id));

  return todos.length < 0 ? (
    <ul>
      {todos.map(({ title }) => (
        <li key={id}>
          {title} - <button onClick={() => deleteHandler(id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>No Todo's!</h2>
  );
};

export default TodoList;
