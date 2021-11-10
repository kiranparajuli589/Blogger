const {Given, When, Then} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')

Given('the user has navigated to homepage', function () {
    return client.url(client.launchUrl)
});

When('the user logs in with email {string} and password {string}', function (email, password) {
    return client.click('button[data-bs-target="#loginModal"]')
        .waitForElementVisible("#loginModal")
        .setValue('input#email-login', email)
        .setValue('input#password-login', password)
        .click('.login-form button[type=submit]')
});

Then('the user should see dashboard button', function () {
    return client.assert.containsText('a[type=button].btn-outline-success', 'Dashboard')
});