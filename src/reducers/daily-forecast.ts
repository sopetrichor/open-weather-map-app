import { clone } from 'lodash';

import { AT_DAILY_FORECAST } from '@actions/index';
import { DailyForecast } from '@prop-types/daily-forecast';
import { stateFromPayload } from '@parsers/fetch-daily-forecast';

export const initialState = () => {
  return new DailyForecast();
};

export const setState = (state: any, type: any) => {
  state.Redux.state = type;
  return state;
};

export default (state: any = initialState(), action: any) => {
  const { type, payload, option } = action;
  const newState = clone(state);
  switch (type) {
    case AT_DAILY_FORECAST.REQUEST:
      setState(newState, type);
      return newState;
    case AT_DAILY_FORECAST.SUCCESS:
      const { response } = payload;
      setState(newState, type);
      stateFromPayload(response, {}, newState);
      newState.Redux.code = response.cod;
      newState.Redux.data = response;
      return newState;
    case AT_DAILY_FORECAST.FAILURE:
      const { error } = payload;
      setState(newState, type);
      newState.Redux.code = error.cod;
      newState.Redux.message = error.message;
      return newState;
    default:
      return state;
  }
};
