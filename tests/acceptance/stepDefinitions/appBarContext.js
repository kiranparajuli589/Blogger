const {Then} = require("@cucumber/cucumber");
const {client} = require("nightwatch-api");
const assert = require("assert");

Then('the user should see dashboard button', function () {
    const isVisible = client.page().appBar().isDashboardButtonVisible()
    assert.ok(isVisible, "Expected the dashboard button to visible.\n" +
        "But not found in the app bar.")
});