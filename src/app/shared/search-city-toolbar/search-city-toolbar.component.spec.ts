import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchCityToolbarComponent} from './search-city-toolbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import * as Reducer from '../../reducers/reducers';
import {MemoizedSelector} from '@ngrx/store';
import * as Models from '../../models/model';

const initialState = {
  city: undefined,
  err: undefined,
  activeCity: { name: 'Amsterdam', country: 'Netherlands' },
  cityWeatherReports: [],
  forecastWeatherReports: []
};
describe('SearchCityToolbarComponent', () => {
  let component: SearchCityToolbarComponent;
  let fixture: ComponentFixture<SearchCityToolbarComponent>;
  let store: MockStore;
  let mockActiveCity: MemoizedSelector<Reducer.AppState, Models.City>;
  let mockCity: MemoizedSelector<Reducer.AppState, Models.City[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [SearchCityToolbarComponent],
      providers: [
        provideMockStore({initialState})
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    mockActiveCity = store.overrideSelector(Reducer.getActiveCity, initialState.activeCity);
    mockCity = store.overrideSelector(Reducer.getCities, initialState.city);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCityToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call displayFn and return value', () => {
    const displayData = component.displayFn({name: 'ab', country: 'abc'});
    expect(displayData).toEqual('ab');
  });
  it('should call filterByName and return macthed arr', () => {
    component.cityList = [{name: 'delhi', country: 'India'}, {name: 'Amsterdam', country: 'Netherlands'}];
    const filteredData = component.filterByName('In');
    expect(filteredData.length).toEqual(1);
    expect(filteredData[0].name).toEqual('delhi');
  });
});
