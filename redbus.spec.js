
// Test Suite -> Testcase: Login
describe("Redbus Automation", () => {

    let api_cities = [];
    let ui_cities = [];

    beforeEach('Get Started', ()=> {
        cy.visit('https://www.redbus.in/');
        cy.viewport(1200,800)
        cy.get('.manageHeaderLbl').click();
        cy.contains('Show My Ticket').click();
        cy.get('#searchTicketTIN').type('27372').typeTab();
        cy.get('#searchTicketEmail').type('babu@testleaf.com').typeTab();
        cy.get('#ticketSearch').click();
        cy.get('#nf_error').then($ele => {
            cy.log($ele.text())
        }) 
        cy.get('.gtm-busHire').click();
        cy.request('https://www.redbus.in/bushire/api/common/source').then($response => {
            $response.body.forEach(every => {
                //cy.log(every.value)
                api_cities.push(every.value)
            });
        }) 

        cy.get('.SourceCity').click();
        cy.wait(1000);
        cy.get('.SourceCity ~ .autocomplete_ul > li').each((element, index, collection) => {
            //cy.log(element.text())
            ui_cities.push(element.text())

        })

    })

    it("Test Automation Assignment", () => {
        
        cy.log("Length is "+api_cities.length)

        if (api_cities.sort().join('|') === ui_cities.sort().join('|')) {
            cy.log('The cities are matching.');
        } else {
            cy.log('The arrays are NOT matching.');
        }

        cy.get('.SourceCity').type(api_cities[1]);
        cy.wait(5000);
        cy.get('.SourceCity ~ .autocomplete_ul > li').click();
        
        cy.request('https://www.redbus.in/bushire/api/common/pickup?queryString=Railway&city='+api_cities[1]).then($response => {
            cy.log($response.body[0].description)
            cy.get('.StartingPoint').click().type($response.body[0].description).typeTab();
        }) 
        
        cy.request('https://www.redbus.in/bushire/api/common/destination?queryString=Airport').then($response => {
            cy.log($response.body[0].description)
            cy.get('.DestinationCity').type($response.body[0].description).typeTab();
        }) 

        cy.wait(1000);


        cy.get('#hire_btn_container').click();
    })

});