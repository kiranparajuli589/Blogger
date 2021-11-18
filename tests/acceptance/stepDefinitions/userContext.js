const {Given, When, Then} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')

When('the user navigates to the homepage', function () {
    return client.url(client.launchUrl)

});


Then('the user should see sign up button', function () {
    return client.assert.containsText('button[data-bs-target="#signupModal"]','Sign-Up!')
});


Then('the user should see login button', function () {
    return client.assert.containsText('button[data-bs-target="#loginModal"]','Login')
 });

Then('the user should not see login button', function () {
    return client.waitForElementNotPresent('button[data-bs-target="#loginModal"]')
});

Then('the user should not see signup button', function () {
    return client.waitForElementNotPresent('button[data-bs-target="#signupModal"]')
});

When('the user signup using the following details using webUI:', function (dataTable) {
    const userDetails = dataTable.rowsHash()
    return client.click('button[data-bs-target="#signupModal"]')
        .waitForElementVisible("#signupModal")
        .setValue('input#username-signup', userDetails['username'])
        .setValue('input#email-signup', userDetails['email'])
        .setValue('input#password-signup', userDetails['password'])
        .click('.signup-form button[type=submit]')
});
Then('the signup modal should not be displayed', function () {
    return client.waitForElementNotVisible("#signupModal")
});
Then('the signup model should be displayed', function () {
    return client.waitForElementVisible("#signupModal")
});




