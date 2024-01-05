Feature: To test Home page functionality

    Background: All pre-test
        Given User launch browser and visit OHRM
        When User enter username "Admin"
        And User enter password "admin123"
        And user click on Login Button

    @test1
    Scenario: To test Menu Tabs
        Given User should navigate to home page
        When User click on "Admin" menu Tab
        And User waits for "1" second
        Then User should be "/admin" page


    @test2
    Scenario Outline: To test all Menu tabs
        Given User should navigate to home page
        When User click on "<TabName>" menu Tab
        And User waits for "1" second
        Then User should be "<URL>" page

        Examples:
            | TabName | URL                  |
            | Admin   | /admin               |
            | PIM     | /pim                 |
            | Leave   | /leave               |
            | My In | /viewPersonalDetails |
