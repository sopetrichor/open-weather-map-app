import { Temperature, TemperatureInterface } from './temperature';

export interface ForecastInterface {
  date: string;
  rain: number;
  temp: TemperatureInterface;
  main: string;
  description: string;
  icon: string;
}

export class Forecast implements ForecastInterface {
  date: string;
  rain: number;
  temp: TemperatureInterface;
  main: string;
  description: string;
  icon: string;

  constructor() {
    this.date = '';
    this.rain = 0;
    this.temp = new Temperature();
    this.main = '';
    this.description = '';
    this.icon = '';
  }
}
