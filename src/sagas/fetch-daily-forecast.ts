import { take, takeLatest, put, call, fork, select } from 'redux-saga/effects';

import { AT_DAILY_FORECAST, AC_DAILY_FORECAST } from '@actions/index';
import { api } from '@services/index';
import { fetchEntity } from './index';

export const fetchDailyForecastEnity = fetchEntity.bind(null, AC_DAILY_FORECAST, api.fetchDailyForecast);

export interface workerPayloadInterface {
  cityName: string;
}
export const worker = function*(payload: workerPayloadInterface) {
  const { cityName } = payload;
  if (cityName) {
    yield call(fetchDailyForecastEnity, payload);
  }
};

export const watcher = function*() {
  const { type, payload } = yield take(AT_DAILY_FORECAST.REQUEST);
  yield fork(worker, payload);
};
