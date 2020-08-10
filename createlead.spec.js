/// <reference types="cypress" />
const leadData = require('../../fixtures/api/mockaroo.json')

// Test Suite -> Testcase: Login
describe("Leaftaps Automation", ()=> {    

    beforeEach("Login to Leaftaps" , () => {
         // Launch the URL
         cy.visit('http://leaftaps.com/opentaps');

         // Find the username and type the value
         cy.get('#username').type('DemoSalesManager').get('#password').type('crmsfa').get('.decorativeSubmit').click();
 
         // Click CRM/SFA
         cy.contains('CRM/SFA').click()

         cy.contains('Lead').invoke('text').as('text')
         
         // Click Leads
         cy.contains('Leads').click();
    })

    afterEach("Logout" , () => {
        cy.xpath("//a[text()='opentaps']").click();
        cy.get(".decorativeSubmit").click();
   })

   
   leadData.forEach(eachData => {
        it.only("Create Lead", ()=>{      

            cy.contains('Create Lead').click();
            cy.get('#createLeadForm_companyName').type(eachData.company_name);
            cy.get('#createLeadForm_firstName').type(eachData.first_name);
            cy.get('#createLeadForm_lastName').type(eachData.last_name);
            cy.get('.smallSubmit').click();
            cy.title().should('contain', 'View Lead');

        })
    })

       
    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })
    

})
