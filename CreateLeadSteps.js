///<reference types = "cypress" />

import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"

// Given('User launch the application', () => {
//     cy.visit('http://leaftaps.com/opentaps');
// })

// And('user enters the username in the loginpage', () => {
//     cy.get('#username').type('DemoSalesManager');
// })

// And('user enters the password in the loginpage', () => {
//     cy.get('#password').type('crmsfa');
// })

// When('user clicks on the Login button', () => {
//     cy.get('.decorativeSubmit').click();
// })

// And('user clicks on the CRMSFA link', () => {
//     cy.contains("CRM/SFA").click();
// })

And('user clicks on the Leads link', () => {
    cy.contains("Leads").click();
})

And('user clicks on the Create Lead link', () => {
    cy.contains("Create Lead").click();
})

And('user enters the company name {string} in the create lead page', (cName) => {
    cy.get("#createLeadForm_companyName").type(cName);
})

And('user enters the first name in the create lead page', () => {
    cy.get("#createLeadForm_firstName").type("Sethu");
})

And('user enters the last name in the create lead page', () => {
    cy.get("#createLeadForm_lastName").type("Subramanian");
})

When('user clicks on the Create lead button', () => {
    cy.get("input[value = 'Create Lead']").click();
})

Then('verify view lead page appears', () => {
    cy.title().should('eq','View Lead | opentaps CRM');
})



