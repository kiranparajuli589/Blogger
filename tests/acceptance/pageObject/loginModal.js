const {client} = require("nightwatch-api");

module.exports = {
  url: function () {
    return this.api.launch_url()
  },
  elements: {
    loginModal: {
      selector: "#loginModal>.modal-dialog",
    },
    emailField: {
      selector: 'input#email-login'
    },
    passwordField: {
      selector: 'input#password-login'
    },
    submitButton: {
      selector: '.login-form button[type=submit]'
    },
  },
  commands: {
    authenticate(dataTable) {
      return this
        .waitForElementVisible("@loginModal")
        .setValue('@emailField', dataTable.email)
        .setValue('@passwordField', dataTable.password)
        .waitForElementVisible("@submitButton")
        .click('@submitButton')
        .waitForAnimationsToFinish()
    },
  }
}
