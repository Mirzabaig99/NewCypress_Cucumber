/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let json = require('../POM/locaters.json');
export default class LoginPage {  //class name

    EnterUserName(username) {     //function for entering user name
        cy.get(json.Username).type(username)
    }

    EnterPassword(password) {     //function for entering password
        cy.get(json.Password).type(password)
    }

    ClickLoginButton() {           //function for clicking login button
        cy.get(json.LoginPage).click();
    }

    HomePageValidation() {
        cy.url().should('include', '/dashboard')
    }

    ErrorMessageValidation() {
        cy.get(json.ErrorMessage).should('be.visible')
    }  
}