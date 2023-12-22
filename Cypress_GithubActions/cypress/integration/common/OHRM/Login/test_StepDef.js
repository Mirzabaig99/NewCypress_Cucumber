/* eslint-disable no-undef */

import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps"

Given ('User is on Login page', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When ('User enter {string} username',(username) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
})

And ('User enter {string} password', function(password){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
})

And ('User click Login',()=>{
    cy.get('.oxd-button').click();
})

Then ('User should goto dashboard',()=>{
    cy.url().should('contain','dashboard')
})