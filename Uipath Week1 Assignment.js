/// <reference types = 'cypress'/> 
describe('UIPath', () => {
    it('Registration', () => {
      cy.visit('https://uibank.uipath.com/register-account')
      cy.get('#firstName').type('Sethu Mathavan');
      cy.get('#title').select('Mr');
      cy.get('#middleName').type('T');
      cy.get('#lastName').type('Subramanian');
      cy.get('#sex').select('Male');
      cy.get('#employmentStatus').select('Full-time');
      cy.get('#age').type('07/26/88');
      cy.get('#maritalStatus').select('Married');
      cy.get('#numberOfDependents').type('2');
      cy.get('#username').type('sethutks2');
      cy.get('#email').type('sethutks2@gmail.com');
      cy.get('#password').type('Usha@s3kar');
      cy.xpath("//button[text()='Register']").click();
    })
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      debugger
      return false
    })
  })