Feature: Post
  As a user
  I want to write a post
  so that I can publish it

  Scenario: Creating a valid new post
    Given a user has been created with the following details
      | username | Demo             |
      | email    | demo@example.com |
      | password | demo             |
    And the user has navigated to the homepage
    And the user has logged in with the following credentials
      | email    | demo@example.com |
      | password | demo             |
    And the user has navigated to the dashboard page
    When the user creates a new blog post using the following details
      | title   | Valid New Post         |
      | content | This is a blog content |
      | author  | Demo                   |
    Then the last created blog should exist with the following details
      | title   | Valid New Post         |
      | content | This is a blog content |
      | author  | Demo                   |
    Then the last created blog should be visible with the following details on the webUI
      | title   | Valid New Post         |
      | content | This is a blog content |
      | author  | Demo                   |