import * as appReducer from './reducers';
import {TestBed, async} from '@angular/core/testing';
import {provideMockStore, MockStore} from '@ngrx/store/testing';

const initialState = {};
describe('App Reducer and Selector', () => {
  let store;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ],
    });
    store = TestBed.inject(MockStore);
  });

  it('should get getCityWeatherReport', () => {
    expect(appReducer.getCityWeatherReport).toBeDefined();
  });
  it('should get getActiveCity', () => {
    expect(appReducer.getActiveCity).toBeDefined();
  });
  it('should get getForecastWeatherReport', () => {
    expect(appReducer.getForecastWeatherReport).toBeDefined();
  });
  it('should get getCities', () => {
    expect(appReducer.getCities).toBeDefined();
  });
});
