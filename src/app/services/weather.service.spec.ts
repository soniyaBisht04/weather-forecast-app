import {TestBed} from '@angular/core/testing';
import {WeatherService} from './weather.service';
import {NO_ERRORS_SCHEMA, Type} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

  });
  beforeEach(() => {
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getWeatherReportByCity and get a list', () => {
    const getWeatherReportByCityResponse = {
      data: []
    };
    service.getWeatherReportByCity('ams').subscribe((res) => {
    });
    const req = httpMock.expectOne('https://api.openweathermap.org/data/2.5/weather?q=ams&appid=455bfe47e62943e954b86bbd6385860a');
    expect(req.request.method).toEqual('GET');
    req.flush(getWeatherReportByCityResponse);
  });
  it('should call getForecastReportByCity and get a list', () => {
    const getForecastReportByCityResponse = {
      data: []
    };
    service.getForecastReportByCity('ams').subscribe((res) => {
    });
    const req = httpMock.expectOne('https://api.openweathermap.org/data/2.5/forecast?q=ams&appid=455bfe47e62943e954b86bbd6385860a');
    expect(req.request.method).toEqual('GET');
    req.flush(getForecastReportByCityResponse);
  });
  it('should call getLocation and get a list', () => {
    const getLocationResponse = {
      data: []
    };
    service.getLocation().subscribe((res) => {
    });
    const req = httpMock.expectOne('https://restcountries.eu/rest/v2/all');
    expect(req.request.method).toEqual('GET');
    req.flush(getLocationResponse);
  });
});
