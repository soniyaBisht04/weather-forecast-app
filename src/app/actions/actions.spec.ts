import * as Actions from './actions';

describe('Store > Data > actions', () => {
  it('SHOULD create a LOAD_CITY_LIST action', () => {
    const action = Actions.LOAD_CITY_LIST;
    expect(action.type).toEqual('[LOAD CITY] city list');
  });
  it('SHOULD create a LOAD_CITY_LIST_SUCCESS action', () => {
    const action = Actions.LOAD_CITY_LIST_SUCCESS;
    expect(action.type).toEqual('[LOAD CITY] city list success');
  });
  it('SHOULD create a LOAD_CITY_LIST_FAILURE action', () => {
    const action = Actions.LOAD_CITY_LIST_FAILURE;
    expect(action.type).toEqual('[LOAD CITY] city list failure');
  });
  it('SHOULD create a LOAD_CITY_WEATHER_REPORT action', () => {
    const action = Actions.LOAD_CITY_WEATHER_REPORT;
    expect(action.type).toEqual('[LOAD WEATHER] load current weather');
  });
  it('SHOULD create a LOAD_CITY_WEATHER_REPORT_SUCCESS action', () => {
    const action = Actions.LOAD_CITY_WEATHER_REPORT_SUCCESS;
    expect(action.type).toEqual('[LOAD WEATHER] load current weather success');
  });
  it('SHOULD create a LOAD_CITY_WEATHER_REPORT_FAILURE action', () => {
    const action = Actions.LOAD_CITY_WEATHER_REPORT_FAILURE;
    expect(action.type).toEqual('[LOAD WEATHER] load current weather failure');
  });

  it('SHOULD create a LOAD_CITY_WEATHER_FORECAST_REPORT action', () => {
    const action = Actions.LOAD_CITY_WEATHER_FORECAST_REPORT;
    expect(action.type).toEqual('[CITY_FORECAST_WEATHER] forecast weather report');
  });
  it('SHOULD create a LOAD_CITY_WEATHER_FORECAST_REPORT_SUCCESS action', () => {
    const action = Actions.LOAD_CITY_WEATHER_FORECAST_REPORT_SUCCESS;
    expect(action.type).toEqual('[CITY_FORECAST_WEATHER] forecast weather report success');
  });
  it('SHOULD create a LOAD_CITY_WEATHER_FORECAST_REPORT_FALURE action', () => {
    const action = Actions.LOAD_CITY_WEATHER_FORECAST_REPORT_FALURE;
    expect(action.type).toEqual('[CITY_FORECAST_WEATHER] forecast weather report failure');
  });
  it('SHOULD create a SELECT_A_CITY action', () => {
    const action = Actions.SELECT_A_CITY;
    expect(action.type).toEqual('[SELECT A CITY ] select a city');
  });
});
