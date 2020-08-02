/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Leaftaps Automation", ()=> {    

    // before (run before describe), after (run after every describe),
    // beforeEach (run before every it) , afterEach (run after every it) 

    before("Once for every suite" , () => {
        cy.log("Test Suite Started")
    })

    beforeEach("Login to Leaftaps" , () => {
         // Launch the URL
         cy.visit('http://leaftaps.com/opentaps');

         // Find the username and type the value
         cy.get('#username').type('DemoSalesManager').get('#password').type('crmsfa').get('.decorativeSubmit').click();
 
         // Click CRM/SFA
         cy.contains('CRM/SFA').click()
 
         // Click Leads
         cy.contains('Leads').click();
    })

    afterEach("Logout" , () => {
        cy.xpath("//a[text()='opentaps']").click();
        cy.get(".decorativeSubmit").click();
   })

   after("End of test suite", ()=>{
       cy.log("All tests done");
   })

    // Testcase
    it("Create Lead", ()=>{      

       // Click Leads
       cy.contains('Create Lead').invoke('text').then($text => {
           cy.log($text)
       })
       cy.contains('Create Lead').click();

    })

    it.skip("Edit Lead", ()=>{

      
        //7    Click Find leads
        cy.get('a:contains("Find Leads")').click();

        //8    Enter first name
        cy.get('div.x-tab-item input[name="firstName"]').type("Babu");

        //9    Click Find leads button  [After this step Add Wait]
        cy.get('button:contains("Find Leads")').click();

        cy.wait(3000);

        //10    Click on first resulting lead
        cy.get('div.x-grid3-col-partyId a').first().click();

        //11    Verify title of the page
        cy.title().should('contains', 'View');

        //12    Click Edit
        cy.get('a:contains("Edit")').click();

        var companyName = "TestLeaf";

        //13    Change the company name
        cy.get('#updateLeadForm_companyName').clear().type(companyName)

        //14    Click Update
        cy.get('input[value="Update"]').click();

        //15    Confirm the changed name appears
        cy.get('#viewLead_companyName_sp').invoke('text').then($text => {
            cy.log($text);
            if($text.includes(companyName)){
                cy.log("All good");
            }else{
                cy.log("Failed match");
            }
        })

    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })
    

})

describe.skip("Leaftaps Automation 1", ()=> {

    // before (run before describe), after (run after every describe),
    // beforeEach (run before every it) , afterEach (run after every it) 

    before("Once for every suite" , () => {
        cy.log("Test Suite Started")
    })

    beforeEach("Login to Leaftaps" , () => {
         // Launch the URL
         cy.visit('http://leaftaps.com/opentaps');

         // Find the username and type the value
         cy.get('#username').type('DemoSalesManager');
 
         // Find the password and type the value
         cy.get('#password').type('crmsfa');
 
         // Find the Login and click
         cy.get('.decorativeSubmit').click();
 
         // Click CRM/SFA
         cy.contains('CRM/SFA').click()
 
         // Click Leads
         cy.contains('Leads').click();
    })

    afterEach("Logout" , () => {
        cy.xpath("//a[text()='opentaps']").click();
        cy.get(".decorativeSubmit").click();
   })

   after("End of test suite", ()=>{
       cy.log("All tests done");
   })

    // Testcase
    it("Create Lead", ()=>{      

       // Click Leads
       cy.contains('Create Lead').invoke('text').then($text => {
           cy.log($text)
       })
       cy.contains('Create Lead').click();

    })

    it.skip("Edit Lead", ()=>{

      
        //7    Click Find leads
        cy.get('a:contains("Find Leads")').click();

        //8    Enter first name
        cy.get('div.x-tab-item input[name="firstName"]').type("Babu");

        //9    Click Find leads button  [After this step Add Wait]
        cy.get('button:contains("Find Leads")').click();

        cy.wait(3000);

        //10    Click on first resulting lead
        cy.get('div.x-grid3-col-partyId a').first().click();

        //11    Verify title of the page
        cy.title().should('contains', 'View');

        //12    Click Edit
        cy.get('a:contains("Edit")').click();

        var companyName = "TestLeaf";

        //13    Change the company name
        cy.get('#updateLeadForm_companyName').clear().type(companyName)

        //14    Click Update
        cy.get('input[value="Update"]').click();

        //15    Confirm the changed name appears
        cy.get('#viewLead_companyName_sp').invoke('text').then($text => {
            cy.log($text);
            if($text.includes(companyName)){
                cy.log("All good");
            }else{
                cy.log("Failed match");
            }
        })

    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })
    

})