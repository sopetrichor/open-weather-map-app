import { take, takeLatest, put, call, fork, select } from 'redux-saga/effects';

import { AT_SEARCH, AC_SEARCH } from '../../src/actions';
import { watcher, worker, fetchByCityName } from '../../src/sagas/search';

describe('test search saga watcher', () => {
  //   let gWatcher: IterableIterator<any>;
  let gWatcher: any;
  const payload = { cityName: 'Taipei' };

  beforeAll(() => {
    gWatcher = watcher();
  });

  test(`it should wait for a search request action`, () => {
    expect(gWatcher.next().value).toEqual(take(AT_SEARCH.REQUEST));
  });
  test('it should fork a search task with payload', () => {
    expect(gWatcher.next(AC_SEARCH.request(payload)).value).toEqual(fork(worker, payload));
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
    expect(gWorker.next().value).toEqual(call(fetchByCityName, payload));
  });
});
