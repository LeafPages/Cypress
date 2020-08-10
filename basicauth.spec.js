/// <reference types="cypress" />


/* 
    
    
*/

describe("Basic Auth Tests", () => {
    it("Auto authenticate using network header", () => {

        // username:password
        var username = 'admin';
        var password = 'admin';
        let encodedString = Buffer.from(username+':'+password).toString('base64');
        cy.log(encodedString);

        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers : {
                Authorization : 'Basic '+encodedString
            }
        })

        /*
        1) passing username:password -> into your chrome url
        2) if your app is redirecting to diffent 
        3) OTP authentication -> captured cookies -> sending the cookies in the visit !! 
        */

    })
})