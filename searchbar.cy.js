/// <reference types="cypress"/>


describe('Validate searchbar for ondemand page', function(){


    it('Validate select searchbar', function(){

        cy.visit('https://matchroom.live/ondemand')
        cy.get('.search-container').type('golf masters')
        

    })


         
    
    
    


})