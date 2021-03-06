import { takeLatest, put, call, fork, select } from 'redux-saga/effects';

import { watcher as watchFetchDailyForecast } from './fetch-daily-forecast';

export function* fetchEntity(entity: any, apiFn: any, payload: any) {
  const { response, error } = yield call(apiFn, payload);
  if (response) {
    yield put(entity.success({ response: response }));
  } else {
    yield put(entity.failure({ error: error }));
  }
}

export default function* root() {
  yield fork(watchFetchDailyForecast);
}
