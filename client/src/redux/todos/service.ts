import axios from "axios";
import { Todo } from "../../types";

export const fetchTodos = async () => {
  try {
    console.log("Here");
    const response = await axios.get("http://localhost:5000/todos");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async (todo: Todo) => {
  try {
    const response = await axios.post("http://localhost:5000/todos", todo);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/todos/${todo.id}`,
      todo
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await axios.delete(`http://localhost:5000/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
