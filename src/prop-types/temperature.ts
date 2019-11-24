export interface TemperatureInterface {
  min: number;
  max: number;
  morn: number;
  night: number;
  eve: number;
}

export class Temperature implements TemperatureInterface {
  min: number;
  max: number;
  morn: number;
  night: number;
  eve: number;

  constructor() {
    this.min = 0;
    this.max = 0;
    this.morn = 0;
    this.night = 0;
    this.eve = 0;
  }
}
