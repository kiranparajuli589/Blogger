const { Given } = require("@cucumber/cucumber")
const { client } = require("nightwatch-api")

const assert = require("assert")

Given("the user has navigated to the homepage", () => {
  return client.url(client.launchUrl, (result) => {
    assert.strictEqual(result.status, 0, JSON.stringify(result))
  })
})
