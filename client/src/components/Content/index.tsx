import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTodosRequest } from "../../redux/todos/slice";
import Content from "./Content";

const ContentContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [createTodoOpen, setCreateTodoOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleCreateTodoOpen = () => setCreateTodoOpen(!createTodoOpen);

  return (
    <Content
      createTodoOpen={createTodoOpen}
      handleCreateTodoOpen={handleCreateTodoOpen}
    />
  );
};

export default ContentContainer;
