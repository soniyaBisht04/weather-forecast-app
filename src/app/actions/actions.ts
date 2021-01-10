import {createAction, props} from '@ngrx/store';
import {City, Weather, Forecast} from '../models/model';

export const LOAD_CITY_LIST = createAction(
  '[LOAD CITY] city list'
);
export const LOAD_CITY_LIST_SUCCESS = createAction(
  '[LOAD CITY] city list success',
  props<{ city: City[] }>()
);
export const LOAD_CITY_LIST_FAILURE = createAction(
  '[LOAD CITY] city list failure',
  props<{ err: any }>()
);
// For current city
export const SELECT_A_CITY = createAction(
  '[SELECT A CITY ] select a city',
  props<{ choosenCity: City }>()
);
/**
 * Weather Report Action List
 */
export const LOAD_CITY_WEATHER_REPORT = createAction(
  '[LOAD WEATHER] load current weather',
  props<{ activeCity: City }>()
);
export const LOAD_CITY_WEATHER_REPORT_SUCCESS = createAction(
  '[LOAD WEATHER] load current weather success',
  props<{ weatherReport: Weather }>()
);
export const LOAD_CITY_WEATHER_REPORT_FAILURE = createAction(
  '[LOAD WEATHER] load current weather failure',
  props<{ err: any }>()
);

/**
 * Forecast Report Action List
 */
export const LOAD_CITY_WEATHER_FORECAST_REPORT = createAction(
  '[CITY_FORECAST_WEATHER] forecast weather report',
  props<{ activeCity: City }>()
);
export const LOAD_CITY_WEATHER_FORECAST_REPORT_SUCCESS = createAction(
  '[CITY_FORECAST_WEATHER] forecast weather report success',
  props<{ forecastWeatherReport: Forecast }>()
);
export const LOAD_CITY_WEATHER_FORECAST_REPORT_FALURE = createAction(
  '[CITY_FORECAST_WEATHER] forecast weather report failure',
  props<{ err: any }>()
);
