const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const axios = require('axios')
const utils = require("util")

After(async () => {
    let userListUrl = client.globals.user_api_url
    let userDeleteUrl = userListUrl
    const response = await axios.get(userListUrl)
    if (response.data.length !== 0) {
        const latestUser = response.data[response.data.length - 1]
        console.log(latestUser.id)
        await axios.delete(userDeleteUrl + latestUser.id)
    }
})


Given('the user has navigated to the homepage using the webUI', function () {
    return client.url(client.launchUrl)
});

Given('user has been created using following details:', async function (dataTable) {
    let userListUrl = client.globals.user_api_url
    const userToBeCreated = dataTable.rowsHash()
    const response = await axios.post(userListUrl, userToBeCreated)
    if (response) {
        client.globals.createdUserList.push(response.data)
    }
});

When('the user logs in with following details using the webUI:', function (dataTable) {
    const userDetails = dataTable.rowsHash()
    client.page.loginPage().authenticate(userDetails)
});

Then('the user should see dashboard button', function () {
    return client.assert.containsText('a[type=button].btn-outline-success', 'Dashboard')
});
