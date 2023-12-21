/* eslint-disable no-undef */

import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../Login/POM/LoginPage.js';

var LoginPage_Ob = new LoginPage();

Given('User launch browser and visit OHRM', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When ('User enter username {string}',(Username)=>{
    LoginPage_Ob.EnterUserName(Username)
})

And ('User enter password {string}',(password)=>{
    LoginPage_Ob.EnterPassword(password)
})

And ('user click on Login Button',()=>{
    LoginPage_Ob.ClickLoginButton();
})

Then ('User should navigate to home page',()=>{
    LoginPage_Ob.HomePageValidation();
})

Then ('User should get error message {string}',(Message)=>{
    LoginPage_Ob.ErrorMessageValidation(Message)
})