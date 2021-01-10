import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CityWeatherForecastReportComponent} from './city-weather-forecast-report.component';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import * as Reducer from '../../reducers/reducers';
import {MemoizedSelector} from '@ngrx/store';
import * as Models from '../../models/model';
import {Forecast} from '../../models/model';

const initialState = {
  city: undefined,
  err: undefined,
  activeCity: {name: 'Amsterdam', country: 'Netherlands'},
  cityWeatherReports: [],
  forecastWeatherReports: []
};

describe('CityWeatherForecastReportComponent', () => {
  let component: CityWeatherForecastReportComponent;
  let fixture: ComponentFixture<CityWeatherForecastReportComponent>;
  let store: MockStore;
  let mockActiveCity: MemoizedSelector<Reducer.AppState, Models.City>;
  let mockCityForecastReport: MemoizedSelector<Reducer.AppState, Models.Weather[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherForecastReportComponent],
      providers: [
        provideMockStore({initialState})
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockActiveCity = store.overrideSelector(Reducer.getActiveCity, initialState.activeCity);
    mockCityForecastReport = store.overrideSelector(Reducer.getForecastWeatherReport, initialState.forecastWeatherReports);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherForecastReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should call getForecastForActiveCity amd get data`, () => {
    const testObj: Forecast[] = [];
    component.getForecastForActiveCity(testObj);
    expect(component.activeCityForecastReport).toBeUndefined();
  });
});
