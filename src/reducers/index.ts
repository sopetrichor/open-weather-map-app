import { combineReducers } from 'redux';

import dailyForecastReducer from './daily-forecast';

export default combineReducers({
  dailyForecast: dailyForecastReducer,
});
