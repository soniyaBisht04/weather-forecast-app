import {provideMockActions} from '@ngrx/effects/testing';
import {TestBed, async} from '@angular/core/testing';
import {Observable, of, ReplaySubject} from 'rxjs';
import {Action} from '@ngrx/store';
import * as ActionList from '../actions/actions';
import * as CustomEffect from './effects';
import {WeatherService} from '../services/weather.service';
import {City} from '../models/model';

describe('App Effects', () => {
  const actions$ = new Observable<Action>();
  let mockDataService;
  let effects: CustomEffect.AppEffects;
  beforeEach(() => {
    mockDataService = jasmine.createSpyObj({WeatherService, getLocation: of<City>({name: '', country: ''})});
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CustomEffect.AppEffects,
        provideMockActions(() => actions$),
        {provide: WeatherService, useValue: mockDataService}
      ]
    });
    effects = TestBed.inject(CustomEffect.AppEffects);
  });
  it('Effects calls the service for location', (async () => {
    const currentAction = new ReplaySubject(1);
    currentAction.next(ActionList.LOAD_CITY_LIST());

    effects.loadCity$.subscribe(action => {

      expect(action).toEqual({
        type: '[LOAD CITY] city list success',
        city: []
      });
    });
  }));
  it('Effects calls the service for weather', (async () => {
    const currentAction = new ReplaySubject(1);
    currentAction.next(ActionList.LOAD_CITY_WEATHER_REPORT({activeCity: {name: '', country: ''}}));

    effects.setActiveCity$.subscribe(action => {

      expect(action.type).toEqual('[LOAD WEATHER] load current weather success');
    });
  }));
  it('Effects calls the service for forecast', (async () => {
    const currentAction = new ReplaySubject(1);
    currentAction.next(ActionList.LOAD_CITY_WEATHER_FORECAST_REPORT({activeCity: {name: '', country: ''}}));
    effects.addForecastWeatherReport$.subscribe(action => {
      expect(action.type).toEqual('[CITY_FORECAST_WEATHER] forecast weather report success');
    });
  }));

});

