import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { deleteTodoRequest } from "../../redux/todos/slice";
import TodoTable from "./Table";

const TodoTableContainer: React.FC = () => {
  const [updateTodoId, setUpdateTodoId] = useState<number | null>(null);
  const [deleteTodoId, setDeleteTodoId] = useState<number | null>(null);

  const todos = useSelector((state: RootState) => state.todos.todos);
  const loading = useSelector((state: RootState) => state.todos.loading);
  const error = useSelector((state: RootState) => state.todos.error);

  return (
    <TodoTable
      todos={todos}
      loading={loading}
      error={error}
      updateTodoId={updateTodoId}
      setUpdateTodoId={setUpdateTodoId}
      deleteTodoId={deleteTodoId}
      setDeleteTodoId={setDeleteTodoId}
    />
  );
};

export default TodoTableContainer;
