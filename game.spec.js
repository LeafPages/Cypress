/// <reference types="cypress" />

describe("Game Tests", () => {

    /* 
    
    
    */
   let sizeOfCards = 8;
   let secrets = [];
    beforeEach('Get the Secrets', ()=> {
        cy.visit('http://13.233.192.65/');
        cy.request('POST', 'http://13.233.192.65:8000/new?size=' + sizeOfCards)
        cy.reload();

        // Find what is secret value of the card !!
        for (let index = 0; index < sizeOfCards * 2; index++) {
            cy.request('PUT', 'http://13.233.192.65:8000/guess?card=' + index).then(response => {
                secrets.push(response.body[0].value)
            })
        }
    })

    it("Play to Win", () => {       

       // cy.log(secrets);
        // loop through the cards -> to click on the matching elements

        let clicked = secrets[0]; // first secret clicked value !! 
        cy.log("The count of secrets"+secrets.length)
        for (let index = 0; index < secrets.length; index++) {
            if (secrets[index] >= 0) {
                cy.get('#'+index).click();
                clicked = secrets[index];
            }

            for (let j = index + 1; j < secrets.length; j++) {
                if (clicked == secrets[j]) {
                    cy.get('#'+j).click();
                    secrets[j] = -1;
                    cy.wait(1000);
                    break;
                }
            }

        }

    })




})