import { useEffect, useCallback, useMemo, useRef } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { AT_SEARCH, AC_SEARCH } from '../actions';

export default (): [any, (cityName: string) => void, boolean, boolean] => {
  const dispatch = useDispatch();
  const mapState = useCallback(state => state.search, []);
  const state = useMappedState(mapState);

  const isDoing = useCallback((): boolean => {
    return state.Redux.state === AT_SEARCH.REQUEST;
  }, []);
  const isDone = useCallback((): boolean => {
    if (state.Redux.state === AT_SEARCH.SUCCESS) {
      return true;
    } else {
      return false;
    }
  }, []);

  const start = useCallback((cityName: string): void => {
    dispatch(AC_SEARCH.request({ cityName: cityName }));
  }, []);
  return [state, start, isDoing(), isDone()];
};
