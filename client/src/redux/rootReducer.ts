import { combineReducers } from "@reduxjs/toolkit";

// Import your reducers here like:
// import todoReducer from './todos/todoSlice';

const rootReducer = combineReducers({
  // todos: todoReducer,
  // more reducers would go here...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
