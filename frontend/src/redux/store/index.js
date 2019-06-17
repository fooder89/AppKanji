// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from "../reducers/index"

// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from "redux-saga";

// import objectsSaga from "../sagas/objectsSaga";
// import dictionarySaga from "../sagas/dictionarySaga";

// const objectsSagaMiddleware = createSagaMiddleware();
// const dictionarySagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(
//         applyMiddleware(
//             dictionarySagaMiddleware,
//             objectsSagaMiddleware
//         )
//     )
// )

// objectsSagaMiddleware.run(objectsSaga)
// dictionarySagaMiddleware.run(dictionarySaga)
// export default store;
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from "../reducers/index";
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root',
    storage,
  //  stateReconciler: autoMergeLevel2,
    timeout: 0,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}