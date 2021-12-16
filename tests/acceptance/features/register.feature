Feature: creating New User Account
  As a user
  I want to create an account
  So that i can login


  Scenario: user tries to sign up with valid credentials
    Given the user has navigated to the homepage
    When the user signs up with the following details using the webUI
      | username | demo1             |
      | email    | demo1@example.com |
      | password | demo1             |
    Then the signup modal should not be visible on the webUI
    And the user should not see the "dashboard" button on the webUI


  Scenario:  user tries to sign up using invalid email
    Given the user has navigated to the homepage
    When the user signs up with the following details using the webUI
      | username | demo1 |
      | email    | demo1 |
      | password | demo1 |
    Then the signup modal should be visible on the webUI
    And the user should not see the "dashboard" button on the webUI

