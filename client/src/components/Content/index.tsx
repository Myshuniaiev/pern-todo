import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { fetchTodosRequest } from "../../redux/todos/slice";
import Content from "./Content";

const ContentContainer: React.FC = () => {
  const [createTodoOpen, setCreateTodoOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos.todos);
  const loading = useSelector((state: RootState) => state.todos.loading);
  const error = useSelector((state: RootState) => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleCreateTodoOpen = () => {
    setCreateTodoOpen(!createTodoOpen);
  };

  return (
    <Content
      todos={todos}
      loading={loading}
      error={error}
      createTodoOpen={createTodoOpen}
      handleCreateTodoOpen={handleCreateTodoOpen}
    />
  );
};

export default ContentContainer;
