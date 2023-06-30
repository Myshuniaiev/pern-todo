import { all } from "redux-saga/effects";
import { watchTodosActions } from "./todos/saga";

function* rootSaga() {
  yield all([watchTodosActions()]);
}

export default rootSaga;
