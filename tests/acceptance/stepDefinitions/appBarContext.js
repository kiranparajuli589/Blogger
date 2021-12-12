const {Then} = require("@cucumber/cucumber");
const {client} = require("nightwatch-api");
const assert = require("assert");

Then('the user should see the dashboard button on the webUI', async () => {
    const isVisible = await client.page.appBar().isButtonVisible("dashboardButton")
    assert.ok(isVisible, "Expected the dashboard button to visible.\n" +
        "But not found in the app bar.")
});

Then('the user should see the logout button on the webUI', async () => {
    const isVisible = await client.page.appBar().isButtonVisible("logOutButton")
    assert.ok(isVisible, "Expected the logout button to visible.\n" +
      "But not found in the app bar.")
});
