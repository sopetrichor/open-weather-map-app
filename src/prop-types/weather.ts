import { City, CityInterface } from './city';
import { Forecast, ForecastInterface } from './forecast';

export interface WeatherInterface {
  forecasts: Array<ForecastInterface>;
  city: CityInterface;
}

export class Weather implements WeatherInterface {
  forecasts: Array<Forecast>;
  city: City;

  constructor() {
    this.forecasts = [];
    this.city = new City();
  }
}
