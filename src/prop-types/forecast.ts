import { Temperature, TemperatureInterface } from './temperature';

export interface ForecastInterface {
  rain: number;
  temp: TemperatureInterface;
  main: string;
  description: string;
  icon: string;
}

export class Forecast implements ForecastInterface {
  rain: number;
  temp: TemperatureInterface;
  main: string;
  description: string;
  icon: string;

  constructor() {
    this.rain = 0;
    this.temp = new Temperature();
    this.main = '';
    this.description = '';
    this.icon = '';
  }
}
