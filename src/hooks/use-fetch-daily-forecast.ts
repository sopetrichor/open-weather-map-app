import { useEffect, useCallback, useMemo, useRef } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { AT_DAILY_FORECAST, AC_DAILY_FORECAST } from '@actions/index';

export default (): [any, (cityName: string) => void, boolean, boolean] => {
  const dispatch = useDispatch();
  const mapState = useCallback(state => state.dailyForecast, []);
  const state = useMappedState(mapState);

  const isDoing = useCallback((): boolean => {
    return state.Redux.state === AT_DAILY_FORECAST.REQUEST;
  }, []);
  const isDone = useCallback((): boolean => {
    if (state.Redux.state === AT_DAILY_FORECAST.SUCCESS) {
      return true;
    } else {
      return false;
    }
  }, []);

  const start = useCallback((cityName: string): void => {
    dispatch(AC_DAILY_FORECAST.request({ cityName: cityName }));
  }, []);
  return [state, start, isDoing(), isDone()];
};
