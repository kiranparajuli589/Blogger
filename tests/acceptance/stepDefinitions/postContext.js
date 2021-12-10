const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const util = require('util')
const assert = require('assert')


Given('the user has navigated to the dashboard page', function () {
    return client.url('/dashboard')
        .assert.urlContains('/dashboard')
    // assert.strictEqual(client.url, '/dashboard')
});

When('the user creates a new blog post using following details:', function (dataTable) {
    const blogData = dataTable.rowsHash()
    return client.page.postPage()
        .addNewBlogPost(blogData)
});

Then('a blog post should exist with following details:', function (dataTable) {
    const postData = dataTable.rowsHash()
    return client.page.postPage().viewCreatedPost(postData)
});


