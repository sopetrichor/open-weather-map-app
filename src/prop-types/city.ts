export interface CityInterface {
  guid: string;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  population: number;
}

export class City implements CityInterface {
  guid: string;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  population: number;

  constructor() {
    this.guid = '';
    this.name = '';
    this.coord = { lon: 0, lat: 0 };
    this.country = '';
    this.population = 0;
  }
}
