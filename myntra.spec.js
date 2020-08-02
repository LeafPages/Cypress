/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Myntra Automation", ()=> {    

    it('Myntra Test 1', () => {
        cy.visit('https://myntra.com', {
            headers: {
                "Accept-Encoding" : "gzip, deflate"
            }
        });
    })


});