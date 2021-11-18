Feature: login
  As a user
  I want to log in to the website
  So that I can write some nice blog posts

  Scenario: valid user login
    Given the user has navigated to the homepage
    And user has been created using following details:
      | username | demo |
      | email | demo@example.com             |
      | password | demo             |
    When the user logs in with following details using the webUI:
      | email | demo@example.com             |
      | password | demo             |
    Then the user should see dashboard button
