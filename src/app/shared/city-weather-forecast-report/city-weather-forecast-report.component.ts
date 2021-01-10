import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {select, Store} from '@ngrx/store';
import {AppState, getActiveCity, getForecastWeatherReport} from '../../reducers/reducers';
import {City, Forecast} from '../../models/model';
import * as APP_ACTION from '../../actions/actions';

@Component({
  selector: 'app-city-weather-forecast-report',
  templateUrl: './city-weather-forecast-report.component.html',
  styleUrls: ['./city-weather-forecast-report.component.scss'],
  providers: [DatePipe]
})
export class CityWeatherForecastReportComponent implements OnInit {
  activeCity: City;
  activeCityForecastReport: Forecast;
  forecastListByDate: any;

  constructor(private store: Store<AppState>, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    // watch on active city value in store
    this.store.pipe(select(getActiveCity)).subscribe((activeCity: City) => {
      this.activeCity = activeCity;
      // lets fetch weather report of active city
      this.store.dispatch(
        APP_ACTION.LOAD_CITY_WEATHER_FORECAST_REPORT({activeCity})
      );
      this.store
        .pipe(select(getForecastWeatherReport))
        .subscribe((forecastWeatherReport: Forecast[]) => {
          this.getForecastForActiveCity(forecastWeatherReport);
        });
    });
  }

  getForecastForActiveCity(forecastDetails: Forecast[]): void {
    this.activeCityForecastReport = forecastDetails.find(
      (forecast: Forecast) => {
        return forecast.city.name === this.activeCity.name;
      }
    );
    if (this.activeCityForecastReport) {
      this.forecastListByDate = [];
      const forecastForNextFiveDates = Array.from(Array(6)).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return this.datePipe.transform(date, 'yyyy-MM-dd');
      });
      forecastForNextFiveDates.map(date => {
        const forecastForDate = this.activeCityForecastReport.list.filter((data) => {
          return data.dt_txt.indexOf(date) !== -1;
        });
        this.forecastListByDate.push({
          date: date,
          value: forecastForDate
        });
      });
    }
  }

}
