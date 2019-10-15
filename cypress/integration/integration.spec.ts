/// <reference types="Cypress" />

context("Integration", () => {
  beforeEach(() => {
    cy.fixture('groups').as("groupsStub");
    cy.fixture('groupProjects').as('groupProjectsStub');
    cy.fixture('jobs').as('jobsStub');
    cy.fixture('pipelines').as('pipelinesStub');
    cy.fixture('pipelineStatus').as('pipelineStatusMock');
    cy.fixture('traceFile').as('traceFileStub');
    cy.server();
    cy.route('GET', `**/groups`, '@groupsStub');
    cy.route('GET', '**/groups/**/projects', '@groupProjectsStub');
    cy.route('GET', '**/projects/**/pipelines/**/jobs', '@jobsStub');
    cy.route('GET', '**/projects/**/pipelines', '@pipelinesStub');
    cy.route('GET', '**/projects/**/jobs/**/trace', '@traceFileStub');
    cy.visit(Cypress.config('baseUrl'));
  });

  it("should preload groups", () => {
    cy.get('mat-card').should('have.length', 1);
  });

  it('should be able to view a groups pipeline jobs', () => {
    cy.get('mat-card').click();
    cy.get('mat-card').should('have.length', 2);
    cy.get('h3').should('have.length', 1);
  });

  it('should get a trace file when clicking on a job', () => {
    cy.get('mat-card').click();
  });

})