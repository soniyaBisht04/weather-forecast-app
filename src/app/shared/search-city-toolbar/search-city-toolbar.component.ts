import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {City} from '../../models/model';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {getCities, AppState} from '../../reducers/reducers';
import {LOAD_CITY_LIST} from '../../actions/actions';
import * as ActionList from '../../actions/actions';
import {Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-city-toolbar',
  templateUrl: './search-city-toolbar.component.html',
  styleUrls: ['./search-city-toolbar.component.scss']
})
export class SearchCityToolbarComponent implements OnInit, OnDestroy {
  searchControl = new FormControl();
  cityList: City[] = [];
  cityList$: Observable<City[]>;
  cityCountryFilteredOptions: Observable<City[]>;
  private subscriptions: Subscription = new Subscription();

  constructor(public store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(LOAD_CITY_LIST());
    this.cityList$ = this.store.pipe(select(getCities));
    this.subscriptions.add(this.store.pipe(select(getCities)).subscribe((data: City[]) => {
      if (data) {
        this.cityList = data;
        this.cityCountryFilteredOptions = this.searchControl.valueChanges.pipe(
          startWith(''),
          map(searchValue => (searchValue && typeof searchValue === 'string') ?
            this.filterByName(searchValue) : this.cityList.slice())
        );
      }
    }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  filterByName(searchString: string): any {
    const filterValue = searchString.toLowerCase();
    return this.cityList.filter(
      (option) =>
        option.name.toLowerCase().indexOf(filterValue) === 0 ||
        option.country.toLowerCase().indexOf(filterValue) === 0
    );
  }

  displayFn(country: City): string {
    return (country && country.name) || '';
  }

  changeActiveCity(city: City): void {
    if (city) {
      this.store.dispatch(
        ActionList.SELECT_A_CITY({choosenCity: city})
      );
    }
  }
}
