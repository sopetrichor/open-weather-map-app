import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import { AT_SEARCH, AC_SEARCH } from '../actions';
import { fetchByCityName } from '../services';

export const watcher = function*() {
  yield takeLatest(AT_SEARCH.REQUEST, worker);
};

const worker = function*(action: any) {
  const { type, payload, option } = action;
  const { cityName } = payload;
  const response = yield call(fetchByCityName, cityName);
  const { cod } = response;
  console.log(`### response`, response);
  if (cod === '200') {
    yield put(AC_SEARCH.success({ ...payload, response: response }));
  } else {
    yield put(AC_SEARCH.failure({ ...payload, error: response }));
  }
};
