const API_KEY = process.env.REACT_APP_API_KEY || "unkonwn_api_key";

import { takeLatest, put, call, fork, select } from "redux-saga/effects";
import { ActionType, creator } from "../actions";

export const fetchData = (cityName: string) => {
  const API_URL = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&APPID={YOUR_API_KEY}`;
  return fetch(API_URL).then(response => response.json());
};

const watcher = function*() {
  yield takeLatest(ActionType.Doing, getData);
};

const getData = function*(action: any) {
  const { type, payload, option } = yield action;
  const { cityName } = payload;
  const response = yield call(fetchData, cityName);
  const { cod } = response;
  if (cod === "200") {
    yield put(creator.done(payload, option, response));
  } else {
    yield put(creator.fail(payload, option, response));
  }
};

export default function* root() {
  yield fork(watcher);
}
