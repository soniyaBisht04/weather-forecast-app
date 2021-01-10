import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as CityAction from './../actions/actions';
import {City, Weather, Forecast} from '../models/model';

export const AppStateKey = 'AppState';

export interface AppState {
  city: City[];
  err: any;
  activeCity: City;
  cityWeatherReports: Weather[];
  forecastWeatherReports: Forecast[];
}

export const initialState: AppState = {
  city: undefined,
  err: undefined,
  activeCity: {name: 'Amsterdam', country: 'Netherlands'},
  cityWeatherReports: [],
  forecastWeatherReports: []
};

const _reducer = createReducer(
  initialState,
  on(CityAction.LOAD_CITY_WEATHER_REPORT_SUCCESS, (state, action) => {
    return {
      ...state,
      cityWeatherReports: state.cityWeatherReports.concat(action.weatherReport)
    };
  }),
  on(CityAction.LOAD_CITY_WEATHER_REPORT_FAILURE, (state, action) => {
    return {
      ...state,
      err: action.err
    };
  }),
  on(CityAction.LOAD_CITY_WEATHER_FORECAST_REPORT_SUCCESS, (state, action) => {
    return {
      ...state,
      forecastWeatherReports: state.forecastWeatherReports.concat(
        action.forecastWeatherReport
      )
    };
  }),
  on(CityAction.LOAD_CITY_WEATHER_FORECAST_REPORT_FALURE, (state, action) => {
    return {
      ...state,
      err: action.err
    };
  }),
  on(CityAction.LOAD_CITY_LIST_FAILURE, (state, action) => {
    return {
      ...state,
      city: state.city,
      err: action.err
    };
  }),
  on(CityAction.LOAD_CITY_LIST_SUCCESS, (state, action) => {
    return {
      ...state,
      city: action.city
    };
  }),
  on(CityAction.SELECT_A_CITY, (state, action) => {
    return {
      ...state,
      activeCity: action.choosenCity
    };
  })
);

export function AppReducer(state, action) {
  return _reducer(state, action);
}

/** selectors */
export const weatherFeature = createFeatureSelector<AppState>(AppStateKey);

export const getCities = createSelector(
  weatherFeature,
  (state: AppState) => state.city
);
export const getActiveCity = createSelector(
  weatherFeature,
  (state: AppState) => state.activeCity
);
export const getCityWeatherReport = createSelector(
  weatherFeature,
  (state: AppState) => state.cityWeatherReports
);

export const getForecastWeatherReport = createSelector(
  weatherFeature,
  (state: AppState) => state.forecastWeatherReports
);
