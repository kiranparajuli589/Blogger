const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const axios = require('axios')
const utils = require("util")


let userListUrl = "http://localhost:3001/api/users/"
let userDeleteUrl = userListUrl + "%s"
let createdUserList = []



After(() => {
    createdUserList.forEach((user) => {
         axios.delete(utils.format(userDeleteUrl,user.id))
            .then()
            .catch(err => {
                console.log(err)
            })
    })
})



Given('the user has navigated to the homepage', function () {
    return client.url(client.launchUrl)
});

Given('user has been created using following details:', async function (dataTable) {
    const userToBeCreated = dataTable.rowsHash()
    const response = await axios.post(userListUrl,userToBeCreated)
    if (response){
        createdUserList.push(response.data)
    }
    console.log(userToBeCreated["email"] + " is trying to login.")
});

When('the user logs in with following details using the webUI:', function (dataTable) {
    const userDetails = dataTable.rowsHash()
    client.page.loginPage().authenticate(userDetails)
});

 Then('the user should see dashboard button', function () {
     return client.assert.containsText('a[type=button].btn-outline-success', 'Dashboard')
 });
