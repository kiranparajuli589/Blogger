const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const axios = require("axios")
const util = require("util")
const assert = require("assert")
const urls = require("./../fixtures/urls")

let currentUser = null

Given('the user has logged in with the following credentials', async (dataTable) => {
  const userCred = dataTable.rowsHash()
  await client.page.appBar().login()
    .authenticate(userCred)
  await client.page.appBar().isButtonVisible("logOutButton")
});

When('the user logs in with following credentials', (dataTable) => {
  const userCred = dataTable.rowsHash()
  return client.page.appBar().login().authenticate(userCred)
});