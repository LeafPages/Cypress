/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Flipkart Automation", ()=> {

    // Testcase
    it("Test 1", ()=>{

       // 1. Load the Flipkart application through https://www.flipkart.com/
        cy.visit('https://www.flipkart.com/');

       // 2. Mouse over on Electronics Menu and click on Vivo sub-menu
       cy.xpath('//span[text()="Electronics"]').trigger('mouseover');
       cy.wait(3000);
       cy.xpath('//a[@title="Vivo"]').click();

       // 3. Now, sort the mobiles by price - "Price -- High to Low"
       cy.xpath("//div[text()='Price -- High to Low']").click();

       // 4. In Navigation area, filter the mobiles with price (Min -  ₹13000) (Max - ₹25000)
       cy.xpath("//span[text()='Price']/following::select").first().select("₹13000");
       cy.xpath("//span[text()='Price']/following::select").last().select("₹25000");

       cy.title().should('contains','Leaftaps');

       // Complete the flipkart by selecting OctaCore
        /*  5. Scroll down to botton of page.
            6. Click on Number of Cores to expand the section.
            7. Check the checkbox Octa core. */

       // Create Lead and Duplicate Lead [45 Minutes]


    })

    

})