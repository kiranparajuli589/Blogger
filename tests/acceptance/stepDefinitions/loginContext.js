const { Given, When, Then, After } = require("@cucumber/cucumber")
const { client } = require("nightwatch-api")
const axios = require("axios")
const util = require("util")
const urls = require("tests/acceptance/fixtures/urls.json")

const userDetailUrl = client.launch_url + urls.user.detail
const userListUrl = client.launch_url + urls.user.list

let createdUsersList = []

After(() => {
  if (createdUsersList.length > 0) {
    createdUsersList.forEach((userToDelete, index) => {
      axios.delete(util.format(userDetailUrl, userToDelete.id))
        .then(() => {
          delete createdUsersList.splice(index, 1)
        })
    })
  }
})

Given("the user has been created with following details:", dataTable => {
  const userToBeCreated = dataTable.rowsHash()
  axios.post(userListUrl, userToBeCreated)
    .then(res => {
      createdUsersList.push({
        id: res.id,
        username: res.username
      })
    })
    .catch((err) => {
      throw new Error("User with username " + dataTable.username + " cannot be created.\nError:\n" + err)
    })
})

Given("the following users have been created with following details:", dataTable => {
  const createdUsers = [{ id: 3, email: "" }, { id: 4 }]
  createdUsersList = createdUsers
})

Given("the user has navigated to the homepage", function () {
  return client.url(client.launchUrl)
})

When("the user logs in with email {string} and password {string} using the webUI", function (email, password) {
  return client.click("button[data-bs-target=\"#loginModal\"]")
    .waitForElementVisible("#loginModal")
    .setValue("input#email-login", email)
    .setValue("input#password-login", password)
    .click(".login-form button[type=submit]")
})

Then("the user should see dashboard button", function () {
  return client.assert.containsText("a[type=button].btn-outline-success", "Dashboard")
})
