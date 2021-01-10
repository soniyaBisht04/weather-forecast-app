import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City, Weather} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  OwmApiKey = '455bfe47e62943e954b86bbd6385860a';

  constructor(private http: HttpClient) {
  }

  // To get the weather report for a particular city
  getWeatherReportByCity(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.OwmApiKey}`
    );
  }

  // To get the forecast for 5 days for a particular city
  getForecastReportByCity(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.OwmApiKey}`
    );
  }

  // To get country city list
  getLocation(): Observable<City> {
    return this.http.get<City>('https://restcountries.eu/rest/v2/all');
  }
}
