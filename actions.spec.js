/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Action Automation", () => {

    it("Drag and Drop", () => {
        cy.visit("https://jqueryui.com/draggable/")
        cy.get('.demo-frame').iframe().find('#draggable').as('drag');
        cy.get('@drag').children().first().should('contain', 'Drag me around');
        cy.get('@drag')
            .trigger('mousedown', {button : 1}, {force : true})
            .trigger('mousemove', 200, 200, {force : true})
            .trigger('mouseup', {force : true})
    })

    it("Drag and Drop to another element", () => {
        cy.visit("https://jqueryui.com/droppable/")
        cy.get('.demo-frame').iframe().find('#draggable').as('drag');
        cy.get('.demo-frame').iframe().find('#droppable').as('drop');
        cy.get('@drag')
        .trigger('mousedown', {button : 1}, {force : true});
        cy.get('@drop')
        .trigger('mousemove', {force : true})
        .trigger('mouseup', {force : true})
        cy.get('@drop').children().first().should('contain', 'Dropped');
    })

    it("Selectable", () => {
        cy.visit("https://jqueryui.com/selectable/")
        cy.get('.demo-frame').iframe().find('ol#selectable >li:nth-of-type(1)').as('first');
        cy.get('.demo-frame').iframe().find('ol#selectable >li:nth-of-type(4)').as('fourth');

        cy.get('@first')
            .trigger('mousedown', {button : 1}, {force : true});

        cy.get('@fourth')
            .trigger('mousemove', {force : true})
            .trigger('mouseup', {force : true});      

            
    })

    it.only("Sortable", () => {
        cy.visit("https://jqueryui.com/sortable/")
        cy.get('.demo-frame').iframe().find('ul#sortable >li:nth-of-type(1)').as('first');
        cy.get('.demo-frame').iframe().find('ul#sortable >li:nth-of-type(4)').as('fourth');

        cy.get('@fourth').then($ele => {
            cy.log($ele[0].getBoundingClientRect().y);
            let y = $ele[0].getBoundingClientRect().y;

            cy.get('@first')
            .trigger('mousedown', {button : 1}, {force : true})
            .trigger('mousemove', 0, y+15,{force : true})
            .trigger('mouseup', {force : true});      


        })

      
      
       
            
    })

})