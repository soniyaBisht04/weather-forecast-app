import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppEffects} from './effects/effects';
import {AppReducer, AppStateKey} from './reducers/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {WeatherReportComponent} from './weather-report/weather-report.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      AppStateKey: AppReducer
    }),
    StoreModule.forFeature(AppStateKey, AppReducer),
    EffectsModule.forRoot([AppEffects]),
    SharedModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
