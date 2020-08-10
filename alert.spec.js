/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Alert Automation", () => {

    it("Simple Alert", () => {
        cy.visit("http://www.leafground.com/pages/Alert.html")
        cy.contains('Alert Box').click();
        
    })

    it("Confirm Alert", () => {
        cy.visit("http://www.leafground.com/pages/Alert.html", {
            onBeforeLoad(window){
                cy.stub(window, 'confirm').returns(false);
            }
        })
        cy.contains('Confirm Box').click();        
    })

    it.only("Prompt Alert", () => {
        cy.visit("http://www.leafground.com/pages/Alert.html", {
            onBeforeLoad(win){
                cy.stub(win, 'prompt').returns(false)
            }
        });
        cy.contains('Prompt Box').click();        
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })

});