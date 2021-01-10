import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, switchMap, count, mergeMap} from 'rxjs/operators';
import {of, pipe} from 'rxjs';
import {City, Forecast} from '../models/model';
import * as ACTIONLIST from '../actions/actions';
import {WeatherService} from '../services/weather.service';

@Injectable()
export class AppEffects {

  @Effect()
  setActiveCity$ = this.actions$.pipe(
    ofType(ACTIONLIST.LOAD_CITY_WEATHER_REPORT),
    mergeMap((action) =>
      this.weatherService.getWeatherReportByCity(action.activeCity.name)
    ),
    mergeMap((weatherReport) => {
      return of(ACTIONLIST.LOAD_CITY_WEATHER_REPORT_SUCCESS({weatherReport}));
    }),
    catchError((error) => {
      return of(ACTIONLIST.LOAD_CITY_WEATHER_REPORT_FAILURE({err: error}));
    })
  );

  @Effect()
  addForecastWeatherReport$ = this.actions$.pipe(
    ofType(ACTIONLIST.LOAD_CITY_WEATHER_FORECAST_REPORT),
    mergeMap((action) =>
      this.weatherService.getForecastReportByCity(action.activeCity.name)
    ),
    mergeMap((forecastWeatherReport: Forecast) => {
      return of(
        ACTIONLIST.LOAD_CITY_WEATHER_FORECAST_REPORT_SUCCESS({
          forecastWeatherReport
        })
      );
    }),
    catchError((error) => {
      return of(ACTIONLIST.LOAD_CITY_WEATHER_FORECAST_REPORT_FALURE({err: error}));
    })
  );

  @Effect()
  loadCity$ = this.actions$.pipe(
    ofType(ACTIONLIST.LOAD_CITY_LIST),
    mergeMap(() => this.weatherService.getLocation()),
    mergeMap((city) => {
      const cityList: City[] = [];
      Object.keys(city).map((cityDetails) => {
        const {name = '', capital = ''} = city[cityDetails];
        cityList.push({
          name: capital,
          country: name
        });
      });
      return of(ACTIONLIST.LOAD_CITY_LIST_SUCCESS({city: cityList}));
    }),
    catchError((error) =>
      of(ACTIONLIST.LOAD_CITY_LIST_FAILURE({err: error}))
    )
  );

  constructor(private actions$: Actions, private weatherService: WeatherService) {
  }
}
