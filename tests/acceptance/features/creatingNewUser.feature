Feature: creating New User Account
  As a user
  I want to create an account
  So that i can login

  Scenario: user navigates to homepage
    When the user has navigated to the homepage using the webUI
    Then the signup button should be visible on the webUI
    And the login button should be visible on the webUI

  
  Scenario: user tries to sign up
    Given the user has navigated to the homepage using the webUI
    When the user signs up with following details using webUI:
      | username | demo1             |
      | email    | demo1@example.com |
      | password | demo1             |
    Then the signup modal should not be visible on the webUI
    And the dashboard button should be visible on the webUI


  Scenario:  user tries to sign up using invalid email
    Given the user has navigated to the homepage using the webUI
    When the user signs up with following details using webUI:
      | username | demo1 |
      | email    | demo1 |
      | password | demo1 |
    Then the signup model should be visible on the webUI

