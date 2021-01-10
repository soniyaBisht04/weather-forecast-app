import { Component, OnInit } from '@angular/core';
import { City, Weather } from 'src/app/models/model';
import { AppState } from '../../reducers/reducers';
import { Store, select } from '@ngrx/store';
import { getActiveCity, getCityWeatherReport } from '../../reducers/reducers';
import * as APP_ACTION from '../../actions/actions';

@Component({
  selector: 'app-city-weather-report-component',
  templateUrl: './city-weather-report.component.html',
  styleUrls: ['./city-weather-report.component.scss']
})
export class CityWeatherReportComponent implements OnInit {
  activeCity: City;
  cityWeatherReport: Weather;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    // get the active city from store
    this.store.pipe(select(getActiveCity)).subscribe((activeCity: City) => {
      this.activeCity = activeCity;
      // get weather report of active city
      this.store.dispatch(APP_ACTION.LOAD_CITY_WEATHER_REPORT({ activeCity }));
    });
    this.store
      .pipe(select(getCityWeatherReport))
      .subscribe((cityWeatherReports: Weather[]) => {
        this.cityWeatherReport = cityWeatherReports.find(
          (weatherDetails) => weatherDetails.name === this.activeCity.name
        );
      });
  }

}
