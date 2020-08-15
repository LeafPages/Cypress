/// <reference types="cypress" />
const data = require('../../fixtures/api/createissue.json');

// Test Suite -> Testcase: Login
describe("JIRA Automation", () => {

    let issueNumber = "";

    beforeEach("Create JIRA Issue using API", () => {

        // username:password
        var username = 'rajalakshmi.govindarajan@testleaf.com';
        var password = 'kEJxzmhkQzvdeP8iysWN2D1B';
        let encodedString = Buffer.from(username + ':' + password).toString('base64');
        cy.log(encodedString);


        cy.request({
            url: 'https://api-mar2020.atlassian.net/rest/api/2/issue/',
            method: 'POST',
            body: data,
            headers: {
                'Authorization': 'Basic '+encodedString,
                'Origin': 'https://api-mar2020.atlassian.net',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            cy.log(response.body.key)
            issueNumber = response.body.key;
        })
    })

    it("Search Loan", () => {
        cy.visit('https://api-mar2020.atlassian.net');
        cy.get('#username').type('rajalakshmi.govindarajan@testleaf.com');
        cy.get('#login-submit').click();
        cy.get('#password').clear().type('Tuna@321');
        cy.get('#login-submit').click();
        //data.fields.project.key
        cy.xpath('//div[text()="' + data.fields.project.key + '"]').parent().prev().click();
        cy.xpath('//input[@placeholder="Filter issues"]').type(issueNumber + "{enter}");
        cy.xpath('//*[@data-test-id="issue.views.issue-base.foundation.summary.heading"]').then($ele => {
            cy.log($ele.text());
        })

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })

});