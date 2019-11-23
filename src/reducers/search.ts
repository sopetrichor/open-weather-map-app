import { clone } from 'lodash';

import { AT_SEARCH } from '../actions';
import { Result } from '../prop-types/result';
import { stateFromPayload } from '../parser/fromSearchByCityName';

export const initialState = () => {
  return new Result();
};

export const setState = (state: any, type: any) => {
  state.Redux.state = type;
  return state;
};

export default (state: any = initialState(), action: any) => {
  const { type, payload, option } = action;
  const newState = clone(state);
  switch (type) {
    case AT_SEARCH.REQUEST:
      setState(newState, type);
      return newState;
    case AT_SEARCH.SUCCESS:
      const { response } = payload;
      setState(newState, type);
      stateFromPayload(response, {}, newState);
      newState.Redux.code = response.cod;
      newState.Redux.data = response;
      return newState;
    case AT_SEARCH.FAILURE:
      const { error } = payload;
      setState(newState, type);
      newState.Redux.code = error.cod;
      newState.Redux.message = error.message;
      return newState;
    default:
      return state;
  }
};
