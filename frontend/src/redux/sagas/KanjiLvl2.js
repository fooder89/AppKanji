// import { takeEvery, call, put } from "redux-saga/effects";
// import { dataLoaded } from "../actions";
// import { k2_DATA_REQUESTED, k2 } from "../constants/actionTypes";

// export default function* watcherSaga() {
//   yield takeEvery(k2_DATA_REQUESTED, workerSaga);
// }

// function* workerSaga() {
//   try {
//     const payload = yield call(getData);
//     yield put(dataLoaded(payload, k2));
//   } catch (e) {
//     yield put({type: "API_ERRORED", payload: e});
//   }
// }

// function getData() {
//     return fetch("localhost:8001/api/kanji/2")
//     .then(response => response.json());
//   }