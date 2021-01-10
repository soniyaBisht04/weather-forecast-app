import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CityWeatherReportComponent} from './city-weather-report.component';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import * as Reducer from '../../reducers/reducers';
import {MemoizedSelector} from '@ngrx/store';
import * as Models from '../../models/model';

const initialState = {
  city: undefined,
  err: undefined,
  activeCity: {name: 'Amsterdam', country: 'Netherlands'},
  cityWeatherReports: [],
  forecastWeatherReports: []
};
describe('CityWeatherReportComponent', () => {
  let component: CityWeatherReportComponent;
  let fixture: ComponentFixture<CityWeatherReportComponent>;
  let store: MockStore;
  let mockActiveCity: MemoizedSelector<Reducer.AppState, Models.City>;
  let mockCityWeatherReport: MemoizedSelector<Reducer.AppState, Models.Weather[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherReportComponent],
      providers: [
        provideMockStore({initialState})
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockActiveCity = store.overrideSelector(Reducer.getActiveCity, initialState.activeCity);
    mockCityWeatherReport = store.overrideSelector(Reducer.getCityWeatherReport, initialState.cityWeatherReports);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
