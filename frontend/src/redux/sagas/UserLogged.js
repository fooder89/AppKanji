import { takeEvery, call, put } from "redux-saga/effects";
import { dataLoaded } from "../actions";
import { UserLog_DATA_REQUESTED, UserLog } from "../constants/actionTypes";

export default function* watcherSaga() {
  yield takeEvery(UserLog_DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put(dataLoaded(payload, UserLog));
  } catch (e) {
    yield put({type: "API_ERRORED", payload: e});
  }
}

function getData() {
    return fetch("localhost:8001/api/kanji/2")
    .then(response => response.json());
  }