import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootSagas } from "./sagas";
import { reducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);