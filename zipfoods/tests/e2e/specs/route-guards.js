
describe('Route Guards', () => {

    it('denies access to guests to auth-required page', () => {
        cy.visit('/product/new');
        cy.get('[data-test=access-denied-heading]').should('exist');
    })

    it('denies access to guests to auth-required page when navigating from another page', () => {
        cy.visit('/');
        cy.get('[data-test="nav-link-add a product"]').click();
        cy.get('[data-test=access-denied-heading]').should('exist');
    })

    it('allows access to logged in users to auth-required page', () => {
        // Note: Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();
        cy.visit('/product/new');
        cy.get('[data-test=access-denied-heading]').should('not.exist');
    })

    it('allows access to logged in users to auth-required page when navigating from another page', () => {
        cy.login();
        cy.visit('/');
        cy.get('[data-test="nav-link-add a product"]').click();
        cy.get('[data-test=access-denied-heading]').should('not.exist');
    })

})