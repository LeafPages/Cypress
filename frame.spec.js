/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Frame Automation", () => {

    it("Simple Frame", () => {
        cy.visit("https://jqueryui.com/draggable/")
       // cy.get('#draggable');
       cy.get('.demo-frame').iframe().find('#draggable')
         .children().first().invoke('text').should('contain', 'Drag me around');
        
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })

});