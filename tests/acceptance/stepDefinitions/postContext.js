const {Given, When, Then, After, Before} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')
const util = require('util')
const assert = require('assert')
const axios = require('axios')
const urls = require('./../fixtures/urls')

const createdPostsList = []


Given('the user has navigated to the dashboard page', async () => {
  await client.page.dashboard().navigate()
  await client.assert.urlContains("dashboard")
});

When('the user creates a new blog post using the following details', async (dataTable) => {
  dataTable = dataTable.rowsHash()
  await client.page.dashboard()
    .addNewBlogPost(dataTable)
  createdPostsList.push(dataTable)
});

Then('the last created blog should exist with the following details', async (dataTable) => {
  dataTable = dataTable.rowsHash()
  const res = await axios.get(urls.post.list)
  if (res.data.length) {
    const instance = res.data[0] // get the latest post
    assert.strictEqual(instance.title, dataTable.title)
    assert.strictEqual(instance.post, dataTable.content)
    assert.strictEqual(instance.user.username, dataTable.author)

    // add id field in the last post in created list
    const post = createdPostsList[0]
    post.id = instance.id
  } else {
    throw new Error("Error: No posts found!")
  }
});

Then('a blog post should be visible with the following details on the webUI', async function (dataTable) {
  const postData = dataTable.rowsHash()
  const post = createdPostsList[0] // getting last published post
  const actualPostContent = await client.page.dashboard().getPostDetailById(post.id)

  assert.strictEqual(actualPostContent.title, postData.title)
  assert.strictEqual(actualPostContent.content, postData.content)
  assert.strictEqual(actualPostContent.author, postData.author)
});


