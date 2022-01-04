const { Then } = require("@cucumber/cucumber")
const { client } = require("nightwatch-api")
const assert = require("assert")

const appBarButtons = ["dashboard", "login", "signup", "logout", "home"]

function checkForAppbarButtons (button) {
  if (!appBarButtons.includes(button)) {
    throw new Error("Error: Invalid button provided.\n" +
      "Available buttons are: [" + appBarButtons.join(", ")) + "]"
  }
}

Then("the user should see the {string} button on the webUI", async (button) => {
  checkForAppbarButtons(button)
  const isVisible = await client.page.appBar().isButtonVisible(`${button}Button`)
  assert.ok(isVisible, "Expected the dashboard button to visible.\n" +
        "But not found in the app bar.")
})

Then("the user should not see the {string} button on the webUI", async (button) => {
  checkForAppbarButtons(button)
  const isVisible = await client.page.appBar().isButtonVisible(`${button}Button`)
  assert.ok(!isVisible, `Expected the ${button} button not to be visible.\n` +
      "But found in the app bar.")
})
