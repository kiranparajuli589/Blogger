Feature: login
  Scenario: valid user login
    Given the user has navigated to homepage
    When the user logs in with email 'demo@example.com' and password 'demo'
    Then the user should see dashboard button