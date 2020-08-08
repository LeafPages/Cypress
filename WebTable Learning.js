/// <reference types = 'cypress'/> 
describe('Learn Webtable', () => {
    it('Erail Webtable', () => {
        cy.visit('https://erail.in/');
        cy.wait(5000);
        cy.get('#txtStationFrom').clear().type('MAS').typeTab();
        cy.get("#txtStationTo").clear().type('TPJ').typeTab();
        cy.get('#chkSelectDateOnly').click();

        cy.get("table[class='DataTable TrainList TrainListHeader']").find('tr').as('tableRows');
        // Find number of rows
        /* cy.get("table[class='DataTable TrainList TrainListHeader']").find('tr').then(list => {
            const numberOfTrains = Cypress.$(list).length;
            cy.log(numberOfTrains);
        }) */

        cy.get("@tableRows").then(list => {
            const numberOfTrains = Cypress.$(list).length;
            cy.log("Number of Trains", numberOfTrains);
        })

        cy.get("@tableRows").each(($tr, index, $trs) => {
            const numberofColumns = $tr.find('td').length;
            cy.log('Number of columns', numberofColumns )
        })

        cy.get("@tableRows").each(($tr, index, $trs) => {
            const departureTime = $tr.find('td').filter('.Sorted').length;
            cy.log('Number of filtered records ',departureTime)
        })

        cy.focused().then(($el) => {
            $el.fadeOut();
            cy.wait(5000);
            $el.fadeIn();
        })

        cy.get('#txtStationFrom').focus();

    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        debugger
        return false
    })

    
})