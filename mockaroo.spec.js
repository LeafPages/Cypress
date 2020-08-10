/// <reference types="cypress" />


/* 
    Get data from Moackaroo and store it in the json file
    
*/

describe("Write to Json", () => {
    it("From Mockaroo", () => {

       cy.request('https://my.api.mockaroo.com/createlead.json?key=1b952600').then(response => {
           cy.log(response.body.length);
           cy.log(response.body[0].company_name);
           cy.writeFile('cypress/fixtures/api/mockaroo.json', response.body);
       })

    })
})