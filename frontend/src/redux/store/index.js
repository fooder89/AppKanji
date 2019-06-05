import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers/index"

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import objectsSaga from "../sagas/objectsSaga";
import dictionarySaga from "../sagas/dictionarySaga";

const objectsSagaMiddleware = createSagaMiddleware();
const dictionarySagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            dictionarySagaMiddleware,
            objectsSagaMiddleware
        )
    )
)

objectsSagaMiddleware.run(objectsSaga)
dictionarySagaMiddleware.run(dictionarySaga)
export default store;