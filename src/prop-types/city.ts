export interface CityWeatherInterface {
  guid: string;
  countryCode: string;
  cityName: string;
  weather: {
    temperature: number;
    maxTemperature: number;
    minTemperature: number;
  };
}
