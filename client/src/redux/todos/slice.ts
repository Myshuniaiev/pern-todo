import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

interface TodoState {
  todos: Array<any>;
  loading: boolean;
  error: null | string;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /* Fetch reducers */
    fetchTodosRequest: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = null;
    },
    fetchTodosFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.todos = [];
      state.error = action.payload;
    },
    /* Create reducers */
    createTodoRequest: (state, action: PayloadAction<Todo>) => {
      state.loading = true;
    },
    createTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    createTodoFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    /* Update reducers */
    updateTodoRequest: (state, action: PayloadAction<Todo>) => {
      state.loading = true;
    },
    updateTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.loading = false;
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    updateTodoFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    /* Delete reducers */
    deleteTodoRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    deleteTodoSuccess: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    deleteTodoFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  createTodoRequest,
  createTodoSuccess,
  createTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} = todoSlice.actions;
export default todoSlice.reducer;
