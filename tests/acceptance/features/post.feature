Feature: Post
  As a user
  I want to write a post
  so that I can publish it

  Scenario: Creating a valid new post
    Given a user has been created with following details:
      |username| Demo|
      |email   | demo@example.com|
      |password| demo            |
    Given the user has navigated to the homepage
#    And the user has logged in to the system using username "demo@example.com" and password "demo"
    And the user has logged in to the system using following details:
      | email | demo@example.com |
      | password | demo             |
    And the user has navigated to the dashboard page
#    When the user adds a title "Valid New Post" and adds blog content "This is a blog content"
    When the user creates a new blog post using following details:
      | title   | Valid New Post         |
      | content | This is a blog content |
    And the user clicks on Create button
    Then a blog post should exist with following details:
      | title   | Valid New Post         |
      | content | This is a blog content |
#    Then a blog post of title "Valid New Post" and content "This is a blog content"