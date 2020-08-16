/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Action Assignment", () => {

    it("Resize", () => {
        cy.visit("https://jqueryui.com/resizable/")
        cy.get('.demo-frame').iframe().find('.ui-icon-gripsmall-diagonal-se').as('resize');
        cy.get('@resize')
            .trigger('mouseover')
            .trigger('mousedown', {button : 1}, {force: true})
            .trigger('mousemove', 180, 100, {force: true})
            .trigger('mouseup', {force: true});           
    })



})