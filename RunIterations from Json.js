/// <reference types = 'cypress'/> 
const names = require('../../fixtures/colors.json');
describe('Learn RunMultipleIterations', () => {
names.forEach(element => {
    it('Cypress commands - readFile as JSON', () => {
        cy.log(element);
    })
 });
})