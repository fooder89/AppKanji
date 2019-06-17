import { takeEvery, call, put } from "redux-saga/effects";
import { dataLoaded } from "../actions";
import { k1_DATA_REQUESTED, k1 } from "../constants/actionTypes";

export default function* watcherSaga() {
  yield takeEvery(k1_DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put(dataLoaded(payload, k1));
  } catch (e) {
    yield put({type: "API_ERRORED", payload: e});
  }
}

function getData() {
    return fetch("localhost:8001/api/kanji/1")
    .then(response => response.json());
  }