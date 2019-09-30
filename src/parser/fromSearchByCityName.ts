import { CityWeatherInterface } from "../prop-types/city";
import { Result } from "../prop-types/result";

export const stateFromPayload = (
  payload: any = {},
  option: any = {},
  state = new Result()
) => {
  const { list } = payload;
  list.map((data: any) => {
    setGuid(data, state);
    setCountryCode(data, state);
    setCityName(data, state);
    setWeather(data, state);
  });
  return state;
};

export const setGuid = (payload: any = {}, state = new Result()) => {
  const { id } = payload;
  state.guid = String(id) || "";
  return state;
};
export const setCountryCode = (payload: any = {}, state = new Result()) => {
  const { sys } = payload;
  const { country } = sys;
  state.countryCode = String(country) || "";
  return state;
};
export const setCityName = (payload: any = {}, state = new Result()) => {
  const { name } = payload;
  state.cityName = String(name) || "";
  return state;
};
export const setWeather = (payload: any = {}, state = new Result()) => {
  const { main } = payload;
  const { temp, temp_max, temp_min } = main;
  state.weather.temperature = temperatureConverter(parseFloat(temp)) || 0;
  state.weather.maxTemperature =
    temperatureConverter(parseFloat(temp_max)) || 0;
  state.weather.minTemperature =
    temperatureConverter(parseFloat(temp_min)) || 0;
  return state;
};

export const temperatureConverter = (kelvin: number) => {
  return Math.round((kelvin - 273.15) * 100) / 100;
};
