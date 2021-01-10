context('weather-forecast-app', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should have the outer container in place', () => {
    cy.get('.weatherContainer').should('exist');
  });
  it('should have app-weather-report-component', () => {
    cy.get('app-weather-report-component').should('exist');
  });
  it('should have search city toolbar component', () => {
    cy.get('app-search-city-toolbar').should('exist');
  });
  it('should have app-city-weather-report-component', () => {
    cy.get('app-city-weather-report-component').should('exist');
  });
  it('should have app-city-weather-forecast-report', () => {
    cy.get('app-city-weather-forecast-report').should('exist');
  });
  it('should have a heading for app', () => {
    cy.get('app-search-city-toolbar h1').should('have.text', 'Weather Forecast App');
  });
  it('should have a search field', () => {
    cy.get('mat-form-field').should('exist');
  });
  it('should have a Active city name', () => {
    cy.get('app-city-weather-report-component mat-card mat-card-header mat-card-title.city-name')
      .should('have.text', 'Amsterdam');
  });
  it('Should have forecast 6 headers ', () => {
    cy.get('app-city-weather-forecast-report mat-tab-group .mat-tab-label-container .mat-tab-list .mat-tab-label-content').then((item) => {
      expect(item.length).to.equals(6);
    });
  });
  it('Should have forecast 6 tabs ', () => {
    cy.get('app-city-weather-forecast-report mat-tab-group .mat-tab-body-wrapper mat-tab-body').then((item) => {
      expect(item.length).to.equals(6);
    });
  });
});
