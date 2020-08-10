/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("UiBank Automation", () => {

    let loanNumber = "";
    let loanAmount = "";

    beforeEach("Login UiBank", () => {
        cy.visit("https://uibank.uipath.com/");
        cy.get("#username").type("kumar");
        cy.get("#password").type("Tuna@123");
        cy.contains("Sign In").click(); 

        // Get all the loan info from the reqyest -> response -> parse to get a random id, amount !!
        cy.request('https://uibank-api.azurewebsites.net/api/quotes/').then(response => {
            // response.body.length;
            const randomNumber = Math.floor(Math.random() * response.body.length);
            loanNumber = response.body[randomNumber].id;            
            loanAmount = response.body[randomNumber].amount;
        })       
    })

    it("Search Loan", () => {
        cy.visit("https://uibank.uipath.com/loans/lookup")
        cy.get('#quoteID').type(loanNumber);
        cy.contains('Retrieve Loan Details').click();
        cy.get('#amountValue').invoke('text').then(text => {
            if(text.includes(loanAmount)){
                cy.log('All matched and good')
            } else{
                cy.log('There is a mismatch')
            }
        })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })

});