import { FetchActionInterface } from "./interface";
import { ActionInterface } from "./fetch";

export const ActionType: FetchActionInterface = {
  Name: "Forecasts:Action:Search-By-City-Name",
  Doing: "Forecasts:Action:Search-By-City-Name:Doing",
  Done: "Forecasts:Action:Search-By-City-Name:Done",
  Fail: "Forecasts:Action:Search-By-City-Name:Fail",
  Abort: "Forecasts:Action:Search-By-City-Name:Abort"
};

export const creator = {
  doing: (payload: any, option: any): ActionInterface => {
    return {
      type: ActionType.Doing,
      payload: payload,
      option: option
    };
  },
  done: (payload: any, option: any, result: any): ActionInterface => {
    return {
      type: ActionType.Done,
      payload: payload,
      option: option,
      result: result
    };
  },
  fail: (payload: any, option: any, error: any): ActionInterface => {
    return {
      type: ActionType.Fail,
      payload: payload,
      option: option,
      error: error
    };
  },
  abort: (payload: any, option: any, result: any): ActionInterface => {
    return {
      type: ActionType.Abort,
      payload: payload,
      option: option
    };
  }
};
