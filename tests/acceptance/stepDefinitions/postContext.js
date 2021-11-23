const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const util=require('util')


Given('the user has navigated to the dashboard page', function () {
    return client.url('/dashboard')
});

When('the user creates a new blog post using following details:', function (dataTable) {
    const blogData = dataTable.rowsHash()
    return client.page.postPage().addNewBlogPost(blogData)
});

When('the user clicks on Create button', function () {
    return client.page.postPage().clickCreateButton()
});

Then('a blog post should exist with following details:', function (dataTable) {
    return client.page.postPage().viewCreatedPost()
});


