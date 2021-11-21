const {Given, When, Then, After} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const axios = require("axios");

When('the user navigates to the homepage using the webUI', function () {
    return client.url(client.launchUrl)
});


Then('the user should see sign up button', function () {
    return client.waitForElementPresent('#signupModal')
});


Then('the user should see login button', function () {
    return client.waitForElementPresent("#loginModal")
 });

Then('the user should not see login button', function () {
    return client.waitForElementNotPresent('#loginModal')
});

Then('the user should not see signup button', function () {
    return client.waitForElementNotPresent('#signupModal')
});

When('the user signs up with following details using webUI:', function (dataTable) {
    const userDetails = dataTable.rowsHash()
    return client.click('button[data-bs-target="#signupModal"]')
        .waitForElementVisible("#signupModal")
        .setValue('input#username-signup', userDetails['username'])
        .setValue('input#email-signup', userDetails['email'])
        .setValue('input#password-signup', userDetails['password'])
        .click('.signup-form button[type=submit]')
});
Then('the signup modal should not be displayed', function () {
    return client.waitForElementNotPresent("#signupModal")
});
Then('the signup model should be displayed', function () {
    return client.waitForElementVisible("#signupModal")
});




