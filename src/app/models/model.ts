export interface City {
  name: string;
  country: string;
}

export interface Temperature {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}
export interface Climate {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface Weather {
  name?: string;
  main?: Temperature;
  weather?: Climate[];
  city?: City;
}

export interface Forecast extends Weather {
  list?: any;
}
