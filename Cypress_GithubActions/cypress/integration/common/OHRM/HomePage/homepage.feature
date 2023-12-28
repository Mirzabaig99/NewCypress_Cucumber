Feature: To test Home page functionality

    Background: All pre-test
        Given User launch browser and visit OHRM
        When User enter username "Admin"
        And User enter password "admin123"
        And user click on Login Button

    Scenario: To test Menu Tabs
        Given User should navigate to home page
        When User click on "Admin" menu Tab
        And User waits for "1" second
        Then User should be "/admin" page