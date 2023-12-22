Feature: To test login page

    @regression @Login @Smoke
    Scenario: Positive - Login with correct username and password
        Given User is on Login page
        When User enter "Admin" username
        And User enter "admin123" password
        And User click Login
        Then User should goto dashboard

    @regression @Login @Smoke
    Scenario: Negative - Login with Incorrect username and password
        Given User is on Login page
        When User enter "Admin" username
        And User enter "admin000" password
        And User click Login
        Then User should goto dashboard