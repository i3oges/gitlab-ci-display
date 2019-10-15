/// <reference types="Cypress" />

context('Integration', () => {
  beforeEach(() => {
    cy.fixture('groups').as('groupsStub');
    cy.fixture('groupProjects').as('groupProjectsStub');
    cy.fixture('jobs').as('jobsStub');
    cy.fixture('pipelines').as('pipelinesStub');
    cy.fixture('pipelineStatus').as('pipelineStatusMock');
    cy.fixture('traceFile').as('traceFileStub');
    cy.fixture('job').as('jobStub');
    cy.server();
    cy.route('GET', `**/groups`, '@groupsStub');
    cy.route('GET', '**/groups/**/projects', '@groupProjectsStub');
    cy.route('GET', '**/projects/**/pipelines/**/jobs', '@jobsStub');
    cy.route('GET', '**/projects/**/pipelines', '@pipelinesStub');
    cy.route('GET', '**/projects/**/jobs/**/trace', '@traceFileStub');
    cy.route('GET', '**/projects/**/jobs/*', '@jobStub');
    cy.visit(Cypress.config('baseUrl'));
  });

  it('should preload groups', () => {
    cy.get('.group-card').should('have.length', 1);
  });

  it('should be able to view a groups pipeline jobs', () => {
    cy.get('.group-card').click();
    cy.get('.job-card').should('have.length', 2).and('include.text', 'rspec:other').and('include.text', 'teaspoon');
    cy.get('.pipeline').should('have.text', 'Html5 Boilerplate');
    cy.get('.group').should('have.text', 'EXPERIMENTAL');
  });

  it('should get a trace file when clicking on a job', () => {
    cy.get('.group-card').click();
    cy.get('.job-card').first().click();
    cy.get('.log-card').should('include.text', 'here is some text');
  });
});
