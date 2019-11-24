const API_KEY = process.env.API_KEY || 'unkonwn_api_key';
const API_QS_WITH_APPID = `&APPID=${API_KEY}`;
const API_VERSION = '2.5';
const API_ROOT = `https://api.openweathermap.org/data/${API_VERSION}`;
const API_MODE = '&mode=json';
const API_UNITS = '&units=metric';

export const callApi = (endpoint: string) => {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint + API_QS_WITH_APPID : endpoint + API_QS_WITH_APPID;

  return fetch(fullUrl).then(
    response =>
      response
        .json()
        .then(json => ({
          json,
          response,
        }))
        .then(({ json, response }) => {
          if (!response.ok) {
            return Promise.reject(json);
          }
          return json;
        })
    // .then(response => ({ response }), error => ({ error: error.message || 'Something bad happened' }))
  );
};

export const fetchByCityName = (cityName: string) => callApi(`/forecast/daily?q=${cityName}` + API_MODE + API_UNITS);
