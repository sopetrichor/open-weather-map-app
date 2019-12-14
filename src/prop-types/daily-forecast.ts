import { ReduxBase } from './redux';
import { City, CityInterface } from './city';
import { Forecast, ForecastInterface } from './forecast';
import { Weather, WeatherInterface } from './weather';

export class DailyForecast extends ReduxBase implements WeatherInterface {
  forecasts: Array<ForecastInterface>;
  city: CityInterface;

  constructor() {
    super();
    this.forecasts = [];
    this.city = new City();
  }
}
