module.exports = {
  commands: {
    signup: function (userDetails) {
      this
        .waitForElementVisible("@signupModal")
        .setValue("@usernameField", userDetails.username)
        .setValue("@emailField", userDetails.email)
        .setValue("@passwordField", userDetails.password)
        .click("@submitButton")
        .waitForAnimationsToFinish()
    },
    async getVisibilityStatusOfModal () {
      let visibility = false
      await this.isVisible("@signupModal", (result) => {
        visibility = result.value
      })
      return visibility
    }
  },
  elements: {
    signupModal: {
      selector: "#signupModal"
    },
    usernameField: {
      selector: "input#username-signup"
    },
    emailField: {
      selector: "input#email-signup"
    },
    passwordField: {
      selector: "input#password-signup"
    },
    submitButton: {
      selector: ".signup-form button[type=submit]"
    }
  }

}
