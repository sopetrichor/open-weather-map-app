import { take, takeLatest, put, call, fork, select } from 'redux-saga/effects';

import { AT_SEARCH, AC_SEARCH } from '../actions';
import { api } from '../services';
import { fetchEntity } from './index';

export const fetchByCityName = fetchEntity.bind(null, AC_SEARCH, api.fetchByCityName);

export interface workerPayloadInterface {
  cityName: string;
}
export const worker = function*(payload: workerPayloadInterface) {
  const { cityName } = payload;
  if (cityName) {
    yield call(fetchByCityName, payload);
  }
};

export const watcher = function*() {
  const { type, payload } = yield take(AT_SEARCH.REQUEST);
  yield fork(worker, payload);
};
