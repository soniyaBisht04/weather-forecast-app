import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {WeatherReportComponent} from './weather-report.component';
import {MatDialogModule} from '@angular/material/dialog';
import {provideMockStore, MockStore} from '@ngrx/store/testing';

const initialState = {};
describe('Weather-report-component', () => {
  let store: MockStore;
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
        provideMockStore({initialState})
      ],
      declarations: [WeatherReportComponent]
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should load the component', () => {
    fixture.detectChanges();
    expect(fixture).toBeDefined();
  });
  it(`should have included 'app-search-city-toolbar'`, () => {
    expect(fixture.nativeElement.querySelector('app-search-city-toolbar')).toBeDefined();
  });
  it(`should have included 'app-city-weather-report-component'`, () => {
    expect(fixture.nativeElement.querySelector('app-city-weather-report-component')).toBeDefined();
  });
  it(`should have included 'app-city-weather-forecast-report'`, () => {
    expect(fixture.nativeElement.querySelector('app-city-weather-forecast-report')).toBeDefined();
  });

});
