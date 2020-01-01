import { take, takeLatest, put, call, fork, select } from 'redux-saga/effects';
import { testSaga, expectSaga } from 'redux-saga-test-plan';

import { AT_DAILY_FORECAST, AC_DAILY_FORECAST } from '@actions/index';
import { watcher, worker, fetchDailyForecastEnity } from '@sagas/fetch-daily-forecast';

describe('test search saga watcher', () => {
  //   let gWatcher: IterableIterator<any>;
  let gWatcher: any;
  const payload = { cityName: 'Taipei' };

  beforeAll(() => {
    gWatcher = watcher();
  });

  test('it should wait for a search request action', () => {
    expect(gWatcher.next().value).toEqual(take(AT_DAILY_FORECAST.REQUEST));
  });
  test('it should fork a search task with payload', () => {
    expect(gWatcher.next(AC_DAILY_FORECAST.request(payload)).value).toEqual(fork(worker, payload));
  });
  test('it should be done', () => {
    expect(gWatcher.next().done).toBe(true);
  });
});

describe('test search saga worker', () => {
  //   let gWorker: IterableIterator<any>;
  let gWorker: any;
  const payload = { cityName: 'Taipei' };

  beforeAll(() => {
    gWorker = worker(payload);
  });

  test('it should invoke fetchByCityName with payload', () => {
    expect(gWorker.next().value).toEqual(call(fetchDailyForecastEnity, payload));
  });
  test('it should be done', () => {
    expect(gWorker.next().done).toBe(true);
  });
});

describe('test search saga watcher [redux-saga-test-plan]', () => {
  const payload = { cityName: 'Taipei' };

  test('exact order with redux-saga-test-plan', () => {
    testSaga(watcher)
      .next()
      .take(AT_DAILY_FORECAST.REQUEST)
      .next(AC_DAILY_FORECAST.request(payload))
      .fork(worker, payload)
      .next()
      .isDone();
  });
});

describe('test search saga worker [redux-saga-test-plan]', () => {
  const payload = { cityName: 'Taipei' };

  test('exact order with redux-saga-test-plan', () => {
    testSaga(worker, payload)
      .next()
      .call(fetchDailyForecastEnity, payload)
      .next()
      .isDone();
  });
});
