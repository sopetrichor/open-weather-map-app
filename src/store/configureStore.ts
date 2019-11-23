import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  store.runSaga = sagaMiddleware.run;
  return store;
}
