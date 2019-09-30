export interface ReduxStateInterface {
  state: string;
  code: string;
  message: string;
  data?: any;
}

export interface ReduxBaseInterface {
  Redux: ReduxStateInterface;
}

export const initialReduxState = (): ReduxStateInterface => {
  return {
    state: "",
    code: "",
    message: "",
    data: undefined
  };
};

export class ReduxBase implements ReduxBaseInterface {
  Redux: ReduxStateInterface;
  constructor() {
    this.Redux = initialReduxState();
  }
}
