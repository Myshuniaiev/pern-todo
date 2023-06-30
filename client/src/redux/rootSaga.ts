// src/redux/rootSaga.ts

import { all } from "redux-saga/effects";

// Import your sagas here like:
// import watchTodosSaga from './todos/todoSaga';

function* rootSaga() {
  yield all([
    // watchTodosSaga(),
    // more sagas would go here...
  ]);
}

export default rootSaga;
