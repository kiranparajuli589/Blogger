Feature: user
  As a user
  I want to create an account
  So that i can login

  Scenario: user is not logged in
    When the user navigates to the homepage using the webUI
    Then the user should see sign up button
    And the user should see login button

  Scenario: logged in user should see dashboard
    Given user has been created using following details:
      | username | demo             |
      | email    | demo@example.com |
      | password | demo             |
    And the user has navigated to the homepage using the webUI
    When the user logs in with following details using the webUI:
      | email    | demo@example.com |
      | password | demo             |
    Then the user should see dashboard button
    And the user should not see login button
    And the user should not see signup button


  Scenario: user tries to sign up
    Given the user has navigated to the homepage using the webUI
    When the user signs up with following details using webUI:
      | username | demo1             |
      | email    | demo1@example.com |
      | password | demo1             |
    Then the signup modal should not be displayed
    And the user should see dashboard button

  Scenario:  user tries to sign up using invalid email
    Given the user has navigated to the homepage using the webUI
    When the user signs up with following details using webUI:
      | username | demo1 |
      | email    | demo1 |
      | password | demo1 |
    Then the signup model should be displayed


