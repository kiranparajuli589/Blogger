const { Given, When } = require("@cucumber/cucumber")
const { client } = require("nightwatch-api")

Given("the user has logged in with the following credentials", async (dataTable) => {
  const userCred = dataTable.rowsHash()
  await client.page.appBar().login()
    .authenticate(userCred)
  await client.page.appBar().isButtonVisible("logOutButton")
})

When("the user logs in with following credentials", (dataTable) => {
  const userCred = dataTable.rowsHash()
  return client.page.appBar().login().authenticate(userCred)
})
