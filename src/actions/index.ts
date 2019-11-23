const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

interface FetchActionInterface {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}
const createFetchActionTypes = (base: string): FetchActionInterface => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type: string) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const AT_SEARCH = createFetchActionTypes('SEARCH');

interface FetchActionSuccessPayloadInterface {
  response: { [key: string]: any };
}
interface FetchActionFailurePayloadInterface {
  error: { [key: string]: any };
}

interface FetchActionPayloadInterface<P, FAP> {
  type: string;
  payload: P & FAP;
}

interface ActionCreatorInterface<P> {
  request: (payload: P) => FetchActionPayloadInterface<P, any>;
  success: (
    payload: P & FetchActionSuccessPayloadInterface
  ) => FetchActionPayloadInterface<P, FetchActionSuccessPayloadInterface>;
  failure: (
    payload: P & FetchActionFailurePayloadInterface
  ) => FetchActionPayloadInterface<P, FetchActionFailurePayloadInterface>;
}

interface SearchRequestPayloadInterface {
  cityName: string;
}
export const AC_SEARCH: ActionCreatorInterface<SearchRequestPayloadInterface> = {
  request: payload => ({
    type: AT_SEARCH[REQUEST],
    payload,
  }),
  success: payload => ({
    type: AT_SEARCH[SUCCESS],
    payload,
  }),
  failure: payload => ({
    type: AT_SEARCH[FAILURE],
    payload,
  }),
};
