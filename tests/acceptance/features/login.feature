Feature: login
  As a user
  I want to log in to the website
  So that I can write some nice blog posts

  Scenario: valid user login
    Given the user has navigated to the homepage
    When the user logs in with email 'demo@example.com' and password 'demo' using the webUI
    Then the user should see dashboard button
