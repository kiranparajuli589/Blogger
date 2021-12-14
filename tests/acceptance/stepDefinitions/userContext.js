const { Given, After } = require("@cucumber/cucumber")
const axios = require("axios")
const urls = require("./../fixtures/urls")
const util = require("util")

const createdUsersList = []

After(() => {
  if (createdUsersList.length > 0) {
    createdUsersList.forEach((userToDelete, index) => {
      axios.delete(util.format(urls.user.detail, userToDelete.id))
        .then(() => {
          delete createdUsersList.splice(index, 1)
        })
    })
  }
})

Given("a user has been created with the following details", function (dataTable) {
  const userToBeCreated = dataTable.rowsHash()
  axios.post(urls.user.list, {
    ...userToBeCreated
  }).then((res) => {
    createdUsersList.push(res.data)
  }).catch(err => {
    throw new Error(`User post failed.\nError:\n${JSON.stringify(err.response.data)}`)
  })
})

Given("the following users have been created with following details:", dataTable => {
  throw new Error("pending implementations")
})
