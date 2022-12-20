/// <reference types="cypress"/>


describe('Validate dropdown for Darts', function(){


    it('Validate select Darts dropdown', function(){

     cy.visit('https://matchroom.live/ondemand')
     cy.get('.field.sports-select.sports-choices-dropdown').click()
     cy.contains('Darts').click()
     cy.get('.field.competition-select.sports-choices-dropdown').click()
     cy.contains('Masters').click()
     cy.get('.duration-select-content').click('')

    })




})