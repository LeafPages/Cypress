/// <reference types = 'cypress'/> 
describe('Learn Webtable', () => {
    it('Erail Webtable', () => {
        cy.visit('http://www.leafground.com/pages/sorttable.html');
        cy.get('#table_id').find('tbody').find('tr').as('tableRows');
        cy.screenshot();
        cy.get('@tableRows').each(($tr, index, $trs) => {
            const emp_id =  $tr.find('td').first().text();
            if(emp_id < 1007){
               cy.log($tr.find('td').last().prev().text());
            }
        })

    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        debugger
        return false
    })

    
})