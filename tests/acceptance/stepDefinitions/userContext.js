const { Given, After, When, Then } = require("@cucumber/cucumber")
const { client } = require("nightwatch-api")
const util = require("util")
const axios = require("axios")
const assert = require("assert")

const urls = require("./../fixtures/urls")

const createdUsersList = []

After(() => {
  if (createdUsersList.length > 0) {
    createdUsersList.forEach((userToDelete, index) => {
      axios.delete(util.format(urls.user.detail, userToDelete.id))
        .then(() => {
          delete createdUsersList.splice(index, 1)
        })
    })
  }
})

Given("a user has been created with the following details", function (dataTable) {
  const userToBeCreated = dataTable.rowsHash()
  axios.post(urls.user.list, {
    ...userToBeCreated
  }).then((res) => {
    createdUsersList.push(res.data)
  }).catch(err => {
    throw new Error(`User post failed.\nError:\n${JSON.stringify(err.response.data)}`)
  })
})

Given("the following users have been created with following details:", dataTable => {
  throw new Error("pending implementations")
})

Given("the user has logged in with the following credentials", async (dataTable) => {
  const userCred = dataTable.rowsHash()
  await client.page.appBar().login().authenticate(userCred)
  await client.page.appBar().isButtonVisible("logOutButton")
})

When("the user logs in with following credentials", (dataTable) => {
  const userCred = dataTable.rowsHash()
  return client.page.appBar().login().authenticate(userCred)
})

When("the user signs up with the following details using the webUI", function (dataTable) {
  const userDetails = dataTable.rowsHash()
  return client.page.appBar().clickSignup().signup(userDetails)
})

Then("the signup modal should be visible on the webUI", async () => {
  const isVisible = await client.page.signupModal().getVisibilityStatusOfModal()
  assert.ok(
    isVisible,
    "Expected signup modal to be visible but not found."
  )
})

Then("the signup modal should not be visible on the webUI", async () => {
  const isVisible = await client.page.signupModal().getVisibilityStatusOfModal()
  assert.ok(
    !isVisible,
    "Expected signup modal not to be visible but was found."
  )
})
