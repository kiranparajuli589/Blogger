Feature: Login
  As a user
  I want to log in to the website
  So that I can write some nice blog posts

  Scenario: valid user login
    Given a user has been created with the following details
      | username | demo             |
      | email    | demo@example.com |
      | password | demo             |
    And the user has navigated to the homepage
    When the user logs in with following credentials
      | email    | demo@example.com |
      | password | demo             |
    Then the user should see the logout button on the webUI
    And the user should see the dashboard button on the webUI
    And the login button should not be visible on the webUI
    And the signup button should not be visible on the webUI
