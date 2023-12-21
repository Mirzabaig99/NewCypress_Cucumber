Feature: To test Login Functionality for Orange HRM

    Background: All pretest
        Given User launch browser and visit OHRM

    Scenario: 01-Login with correct username and password
        When User enter username "Admin"
        And User enter password "admin123"
        And user click on Login Button
        Then User should navigate to home page

    Scenario: 02- Login with In-correct username and password
        When User enter username "dmin"
        And User enter password "dmin123"
        And user click on Login Button
        Then User should get error message "Invalid credentials"