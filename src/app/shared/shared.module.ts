import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ToFahrenheitPipe} from './to-fahrenheit.pipe';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

import {SearchCityToolbarComponent} from './search-city-toolbar/search-city-toolbar.component';
import {CityWeatherForecastReportComponent} from './city-weather-forecast-report/city-weather-forecast-report.component';
import {CityWeatherReportComponent} from './city-weather-report/city-weather-report.component';


@NgModule({
  declarations: [CityWeatherReportComponent, ToFahrenheitPipe, CityWeatherForecastReportComponent, SearchCityToolbarComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    CityWeatherReportComponent,
    ToFahrenheitPipe,
    CityWeatherForecastReportComponent,
    SearchCityToolbarComponent]
})
export class SharedModule {
}
