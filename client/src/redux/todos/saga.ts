// src/redux/todos/todoSaga.ts

import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchTodosSuccess,
  fetchTodosFailure,
  fetchTodosRequest,
  createTodoFailure,
  createTodoRequest,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
} from "./slice";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "./service";
import { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

/* Load todos */
function* handleTodosLoad(): Generator<any> {
  try {
    const todos = (yield call(fetchTodos)) as any[];
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure((error as Error).toString()));
  }
}

/* Create a todo */
function* handleCreateTodo(action: PayloadAction<Todo>): Generator<any> {
  try {
    const todo = yield call(createTodo, action.payload);
    yield put(createTodoSuccess(todo as Todo));
  } catch (error) {
    yield put(createTodoFailure((error as Error).toString()));
  }
}

/* Update a todo */
function* handleUpdateTodo(action: PayloadAction<Todo>): Generator<any> {
  try {
    const todo = yield call(updateTodo, action.payload);
    yield put(updateTodoSuccess(todo as Todo));
  } catch (error) {
    yield put(updateTodoFailure((error as Error).toString()));
  }
}

/* Delete a todo */
function* handleDeleteTodo(action: PayloadAction<number>): Generator<any> {
  try {
    yield call(deleteTodo, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(deleteTodoFailure((error as Error).toString()));
  }
}

export function* watchTodosActions() {
  yield takeEvery(fetchTodosRequest.type, handleTodosLoad);
  yield takeEvery(createTodoRequest.type, handleCreateTodo);
  yield takeEvery(updateTodoRequest.type, handleUpdateTodo);
  yield takeEvery(deleteTodoRequest.type, handleDeleteTodo);
}
