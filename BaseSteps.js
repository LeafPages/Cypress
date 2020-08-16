/// <reference types = "cypress"/>

import {Before, After} from "cypress-cucumber-preprocessor/steps"

Before(() => {
    cy.visit(Cypress.env('url'));
    cy.get('#username').type('DemoSalesManager');
    cy.get('#password').type('crmsfa');
    cy.get('.decorativeSubmit').click();
    cy.contains("CRM/SFA").click();  
})

After(() => {
    cy.xpath("//a[@href='/opentaps/']").click();
    cy.get('.decorativeSubmit').click();
})