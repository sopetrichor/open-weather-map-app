export interface ActionInterface<P = any, O = any> {
  type: string;
  payload?: P;
  option?: O;
  result?: any;
  error?: any;
}

// export interface ActionGroupInterface<P = any, O = any> {
//   doing: (payload?: P, option?: O) => ActionGroupInterface<P, O>;
//   done: (payload?: P, option?: O) => ActionGroupInterface<P, O>;
//   parsed: (payload?: P, option?: O) => ActionGroupInterface<P, O>;
//   fail: (payload?: P, option?: O) => ActionGroupInterface<P, O>;
//   abort: (payload?: P, option?: O) => ActionGroupInterface<P, O>;
// }

// export interface ActionCreatorGroupInterface<P = any, O = any> {
//   doing: ActionInterface<P, O>;
//   done: ActionInterface<P, O>;
//   parsed: ActionInterface<P, O>;
//   fail: ActionInterface<P, O>;
//   abort: ActionInterface<P, O>;
// }
