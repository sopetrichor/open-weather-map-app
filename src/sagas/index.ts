import { takeLatest, put, call, fork, select } from 'redux-saga/effects';

import { watcher as SearchWatcher } from './search';

export default function* root() {
  yield fork(SearchWatcher);
}
