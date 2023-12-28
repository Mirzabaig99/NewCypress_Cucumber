/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let json = require('../POM/locaters.json');

export default class  homepage {
    userclickMenuTab(MenuName){
        cy.xpath(json.MenuTab_xpath1 + MenuName + json.MenuTab_xpath2).click();
    }

    userWaits(time){
        cy.wait(time*1000)
    }

    usernavPage(page){
        cy.url().should('include', page)
    }
}