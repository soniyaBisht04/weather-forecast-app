# WeatherForecastApp

Weather forecast app, this app provides weather information for today and forecast for next five days in 3 hours interval. You can also search for a city or country and get the details for that city. 

##Firebase Url  
https://weather-forecast-app-fe5f6.web.app

## Development

Clone from git repo
Run `npm install` to install all the dependency for project
Run `ng serve` for a dev server.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
For code coverage Run `ng test --code-coverage` , You will find generated report in coverage folder, Run index.html to view report.

## Running end-to-end tests

Run `npm run cypress` to execute the end-to-end tests via Cypress.

## Project structure
Here is a short description about files

```
/
├─ cypress/                                      # ...that holds end to end cases for app
├─ src/
│  ├─ app/                                       # ...App Folder
│  │  ├─ actions/                                # ...NGRX Action File
│  │  ├─ effects/                                # ...that holds the all the effects for app
│  │  ├─ models/                                 # ...that holds the interfaces for app
│  │  ├─ reducers/                               # ...that reducers and selectors for app
│  │  ├─ services/                               # ...that holds the external REST Calls for forecast
│  │  ├─ shared/                                 # ...that holds shared component for project
│  │  │     ├─ city-weather-forecast-report      # ...that holds view and logic for forecast report
│  │  │     ├─ city-weather-report               # ...that holds view and logic for waether report
│  │  │     ├─ search-city-toolbar               # ...that holds view and logic for search new city and country
│  │  │     ├─ to-fahrenheit-pipe                # ...that holds logic for coverting kelvin to F
│  │  ├─ weather-report                          # ...that holds the application structure to include all necessary component
│  │  ├─ app-routing.modules.ts                  # ...that holds routing definition of app
│  │  ├─ app.component.html/                     # ...that holds view for root component
│  │  ├─ app.component.spec.ts/                  # ...root component spec file
│  │  ├─ app.component.ts/                       # ...root app component details
│  │  └─ app.module.ts/                          # ...that holds app module information 
│
├─ .editorconfig     # Code style definitions
├─ .gitignore        # List of files and folders not tracked by Git
├─ package.json      # Project manifest
├─ cypress.json      # cypress settings
└─ README.md         # This file
```
