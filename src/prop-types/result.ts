import { ReduxBase } from "./redux";
import { CityWeatherInterface } from "../prop-types/city";

export class Result extends ReduxBase implements CityWeatherInterface {
  guid: string;
  countryCode: string;
  cityName: string;
  weather: {
    temperature: number;
    maxTemperature: number;
    minTemperature: number;
  };
  constructor() {
    super();
    this.guid = "";
    this.countryCode = "";
    this.cityName = "";
    this.weather = {
      temperature: 0,
      maxTemperature: 0,
      minTemperature: 0
    };
  }
}
