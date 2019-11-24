import { City, CityInterface } from '../prop-types/city';
import { Result } from '../prop-types/result';
import { Forecast, ForecastInterface } from '../prop-types/forecast';
import { Temperature, TemperatureInterface } from '../prop-types/temperature';
import { Weather, WeatherInterface } from '../prop-types/weather';

export const setCity = (payload: any = {}, option: any = {}, state = new City()): CityInterface => {
  const { id, name, coord, country, population } = payload;

  state.guid = id;
  state.name = name;
  state.coord.lon = coord.lon;
  state.coord.lat = coord.lat;
  state.country = country;
  state.population = population;

  return state;
};
export const setTemp = (payload: any = {}, option: any = {}, state = new Temperature()): TemperatureInterface => {
  const { min, max, morn, night, eve } = payload;

  state.min = min;
  state.max = max;
  state.morn = morn;
  state.night = night;
  state.eve = eve;

  return state;
};
export const setForecasts = (payload: any = {}, option: any = {}, state = new Forecast()): Array<ForecastInterface> => {
  return payload.map((data: any) => {
    const { temp, weather, rain } = data;
    const { main, description, icon } = weather[0];

    state.rain = rain;
    state.main = main;
    state.description = description;
    state.icon = icon;
    setTemp(temp, {}, state.temp);

    return state;
  });
};

export const stateFromPayload = (payload: any = {}, option: any = {}, state = new Result()) => {
  const { city, list } = payload;

  state.city = setCity(city, {}, state.city);
  state.forecasts = setForecasts(list, {});

  return state;
};

export const temperatureConverter = (kelvin: number) => {
  return Math.round((kelvin - 273.15) * 100) / 100;
};
