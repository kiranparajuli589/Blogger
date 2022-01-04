Feature: Homepage
  As a user
  I want to be able to use homepage
  So that I can manage my blogging

Scenario: user navigates to homepage
  When the user navigates to the homepage
  Then the user should see the "signup" button on the webUI
  Then the user should see the "login" button on the webUI
