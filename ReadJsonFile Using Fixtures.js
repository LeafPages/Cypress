/// <reference types = 'cypress'/> 
describe('Read Data', () => {
    it('By Fixture', () => {
        cy.fixture("CreateLead.json").its('companyName').then(cName => {
            cy.log(cName);
        });
    })

    it('By readFile', () => {
        cy.readFile("cypress/fixtures/CreateLead.json").its('companyName').then(cName => {
            cy.log(cName);
        });
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        debugger
        return false
    })

    
})