/* eslint-disable no-undef */

import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps"
import homepage from '../HomePage/POM/homePage.js';

Before(()=>{
  cy.log("Before")
})
var homepage_ob = new homepage()
When(/^User click on "([^"]*)" menu Tab$/, (Menu) => {
    homepage_ob.userclickMenuTab(Menu)
});

When(/^User waits for "([^"]*)" second$/, (time) => {
   homepage_ob.userWaits(time)
});

Then(/^User should be "([^"]*)" page$/, (page) => {
  homepage_ob.usernavPage(page)
});

