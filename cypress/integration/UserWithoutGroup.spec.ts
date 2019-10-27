/// <reference types="Cypress" />

context('User Without Group', () => {
  beforeEach(() => {
    cy.fixture('emptyGroups').as('groupsStub');
    cy.fixture('projects').as('projectsStub');
    cy.fixture('singleProject').as('singleProjectStub');
    cy.fixture('jobs').as('jobsStub');
    cy.fixture('pipelines').as('pipelinesStub');
    cy.fixture('traceFile').as('traceFileStub');
    cy.fixture('job').as('jobStub');
    cy.server();
    cy.route('GET', `**/groups`, '@groupsStub');
    cy.route('GET', '**/projects**', '@projectsStub');
    cy.route('GET', '**/projects/**', '@singleProjectStub');
    cy.route('GET', '**/projects/**/pipelines/**/jobs', '@jobsStub');
    cy.route('GET', '**/projects/**/pipelines', '@pipelinesStub');
    cy.route('GET', '**/projects/**/jobs/**/trace', '@traceFileStub');
    cy.route('GET', '**/projects/**/jobs/*', '@jobStub');
    cy.visit(Cypress.config('baseUrl'));
  });

  it('should be redirected to /projects', () => {
    cy.url().should('include', 'projects');
  });

  it('should be able to view a groups pipeline jobs', () => {
    cy.get('.job-card').should('have.length', 2).and('include.text', 'rspec:other').and('include.text', 'teaspoon');
    cy.get('.pipeline').should('have.text', 'Diaspora Client');
    cy.get('mat-toolbar').should('have.text', 'Pipeline Viewer');
  });

  it('should get a trace file when clicking on a job', () => {
    cy.get('.job-card').first().click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}project/9/job/6`);
    cy.get('.job-details').should('include.text', 'Test the CI integration.Administrator');
    cy.get('.log-card').should('include.text', 'here is some text');
    cy.get('mat-toolbar')
      .should('include.text', 'Pipeline Viewer')
      .and('include.text', '/ Diaspora Client')
      .and('include.text', '/ rspec:other');
  });
});
