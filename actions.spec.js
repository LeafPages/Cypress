/// <reference types="cypress" />

describe("Handle Frames", () => {


    it("Interact with frame", () => {

        cy.visit("https://jqueryui.com/draggable");
        cy.get('.demo-frame').iframe().find('#draggable').children().first().invoke('text').should('contain', 'Drag me around');

    })

    it("Drag and Drop by Position", () => {

        cy.visit("https://jqueryui.com/draggable");
        cy.get('.demo-frame').iframe().find('#draggable').as('drag')
        cy.get('@drag').children().first().invoke('text').should('contain', 'Drag me around');
        cy.get('@drag')
            .trigger("mousedown", { button: 1 }, { force: true })
            .trigger("mousemove", 200, 200, { force: true })
            .trigger("mouseup", { force: true });

    })

    it("Drag and Drop by Element", () => {

        cy.visit("https://jqueryui.com/droppable/");
        cy.get('.demo-frame').iframe().find('#draggable').as('drag')
        cy.get('.demo-frame').iframe().find('#droppable').as('drop')

        cy.get('@drag').trigger("mousedown", { which: 1 })
        cy.get('@drop').trigger("mousemove").trigger("mouseup", { force: true });
    })

    it("With and Outside frame", () => {

        cy.visit("https://jqueryui.com/draggable");
        cy.get('.demo-frame').iframe().find('#draggable').as('drag')
        cy.get('@drag').children().first().invoke('text').should('contain', 'Drag me around');
        cy.get('@drag')
            .trigger("mousedown", { button: 1 }, { force: true })
            .trigger("mousemove", 200, 200, { force: true })
            .trigger("mouseup", { force: true });

        cy.contains('Resizable').click();

    })

    it("Selectable", () => {

        cy.visit("https://jqueryui.com/selectable/");
        cy.get('.demo-frame').iframe().find('ol.ui-selectable >li:nth-of-type(1)').as('first')
        cy.get('.demo-frame').iframe().find('ol.ui-selectable >li:nth-of-type(4)').as('fourth')

        cy.get('@first')
            .trigger("mousedown", { button: 1 }, { force: true })
        cy.get('@fourth')
            .trigger("mousemove", { button: 1 }, { force: true })
            .trigger("mouseup", { force: true });
    })

    it.only("Sortable", () => {
        var y = 0;
        cy.visit("https://jqueryui.com/sortable/");
        cy.get('.demo-frame').iframe().find('ul.ui-sortable >li:nth-of-type(1)').as('first')
        cy.get('.demo-frame').iframe().find('ul.ui-sortable >li:nth-of-type(4)').as('fourth')
        cy.get('@fourth').then($el => {
            y = $el[0].getBoundingClientRect().y;
            cy.get('@first')
                .trigger("mousedown", { button: 1 }, { force: true })
                .trigger("mousemove", 0, y + 15, { force: true })
                .trigger("mouseup", { force: true });
        })
    })
})