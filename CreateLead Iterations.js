/// <reference types = 'cypress'/>
const jsonArray = require("../../fixtures/CreateLead.json");
describe('Read Data', () => {

    jsonArray.forEach(eachData => {
        it('Run Each JSON object', () => {
            cy.visit('http://leaftaps.com/opentaps');
            cy.get('#username').type('DemoSalesManager');
            cy.get('#password').type('crmsfa');
            cy.get('.decorativeSubmit').click();
            cy.contains("CRM/SFA").click();
            cy.contains("Leads").click();
            cy.contains("Create Lead").click();
            cy.get("#createLeadForm_companyName").type(eachData.companyName);
            cy.get("#createLeadForm_firstName").type(eachData.firstName);
            cy.get("#createLeadForm_lastName").type(eachData.lastName);
            cy.get("input[value = 'Create Lead']").click();
            cy.title().should('eq', 'View Lead | opentaps CRM');
            cy.screenshot();
        })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        debugger
        return false
    })


})