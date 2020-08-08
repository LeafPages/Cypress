/// <reference types = 'cypress'/> 
describe('Myntra Product search', () => {
    it('Sunglasses search and validate Similar products', () => {
      cy.visit('https://www.myntra.com/', {
        headers: {
          "Accept-Encoding": "gzip, deflate"
        }
      })
      cy.get('input[class = desktop-searchBar]').type('Sunglasses').type('{enter}')
  
      cy.wait(6000)
  
      cy.get('input[value="Polaroid"]').first().click({ force: true });
  
      cy.wait(6000)
  
      cy.xpath("(//h4[text()='Men Rectangle Sunglasses']/following::*[@class='product-sizes'])[1]").invoke('text').then($productSize => {
        let productSize = $productSize;
        cy.log("Productb Size: ", productSize)
      })
  
      cy.xpath("(//h4[text()='Men Rectangle Sunglasses']/following::*[@class='product-price'])[1]").invoke('text').then($productPrice => {
        let productPrice = $productPrice;
        cy.log("Productb Price: ", productPrice)
      })

      cy.xpath("(//div[@class='product-ratingsContainer']/following::a)[1]").trigger('mouseover');
      cy.wait(5000);
      cy.get('.image-grid-similarColorsCta').first().click({ force: true })
      
      cy.get(".results-similarItemContainer li").its('length').should('be.gt',5);
  
    })
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      debugger
      return false
    })
  })