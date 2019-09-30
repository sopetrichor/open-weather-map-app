import { combineReducers } from "redux";
import { cloneDeep } from "lodash";

import { ActionType } from "../actions";
import { Result } from "../prop-types/result";
import { stateFromPayload } from "../parser/fromSearchByCityName";

export const initialState = () => {
  return new Result();
};

export const setState = (state: any, type: any) => {
  state.Redux.state = type;
  return state;
};

const reducer = (state: any = initialState(), action: any) => {
  const { type, payload, option } = action;
  const newState = cloneDeep(state);
  switch (type) {
    case ActionType.Doing:
      setState(newState, type);
      return newState;
    case ActionType.Done:
      const { result } = action;
      setState(newState, type);
      stateFromPayload(result, {}, newState);
      newState.Redux.code = result.cod;
      newState.Redux.data = result;
      // console.log(`done`, result);
      // console.log(`newState`, newState);
      return newState;
    case ActionType.Fail:
      const { error } = action;
      setState(newState, type);
      newState.Redux.code = error.cod;
      newState.Redux.message = error.message;
      // console.log(`fail`, error);
      // console.log(`newState`, newState);
      return newState;
    case ActionType.Abort:
      setState(newState, type);
      return newState;
    default:
      return state;
  }
};

export default reducer;
