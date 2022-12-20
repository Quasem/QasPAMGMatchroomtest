/// <reference types="cypress"/>


describe('Validate searchbar for ondemand page', function(){


    it('Validate select searchbar', function(){

        cy.visit('https://matchroom.live/ondemand')
        cy.get('.search-content').type('golf masters')
        cy.get('form.ng-valid > .icon-search').click()
        

    })


         
    
    
    


})