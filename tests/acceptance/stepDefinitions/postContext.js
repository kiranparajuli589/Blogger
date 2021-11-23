const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const util=require('util')

Before(()=> {
    console.log("This is before hook.")
})
After(() =>{
    console.log("This is after hook.")
})
Given('the user has navigated to the dashboard page', function () {
    return client.url('/dashboard')
});

When('the user creates a new blog post using following details:', function (dataTable) {
    const blogData = dataTable.rowsHash()
    client.page.postPage().addNewBlogPost(blogData)
});

When('the user clicks on Create button', function () {

    return client.useXpath()
        .click('//button[.="Create"]')
        .useCss();

});

Then('a blog post should exist with following details:', function (dataTable) {
    const postTitleXpath = '//h5[contains(text(),"%s")]'
    const blogData = dataTable.rowsHash()
    const formattedXpath = util.format(postTitleXpath,blogData.title)
    return client.useXpath()
        .waitForElementVisible(formattedXpath)
        .useCss();
});


