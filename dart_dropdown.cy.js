/// <reference types="cypress"/>


describe('Validate dropdown for Darts', function(){


    it('Validate select Darts dropdown', function(){

     cy.visit('https://matchroom.live/ondemand')
     cy.get('.field.sports-select.sports-choices-dropdown').click()
     cy.contains('Darts').click()
    
     
     



    })



})




