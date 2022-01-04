const { client } = require("nightwatch-api")

module.exports = {
  elements: {
    loginButton: {
      selector: "#login"
    },
    homeButton: {
      selector: "#home"
    },
    dashboardButton: {
      selector: "#dashboard"
    },
    signupButton: {
      selector: "#signup"
    },
    logoutButton: {
      selector: "#logout"
    }
  },
  commands: {
    login () {
      this.waitForElementVisible("@loginButton")
        .click("@loginButton")
      return client.page.loginModal()
    },
    clickSignup () {
      this.waitForElementVisible("@signupButton")
        .click("@signupButton")
      return client.page.signupModal()
    },
    /**
     * returns app bar button selector
     *
     * @param buttonType
     *
     * @returns String
     * @throws Error
     */
    getButtonSelector (buttonType) {
      const buttons = Object.keys(this.elements)
      if (!buttons.includes(buttonType)) {
        throw new Error(`Button ${buttonType} is not available in the app bar.\n
                 Available buttons are:\n${buttons.join(",")}`)
      } else return this.elements[buttonType].selector
    },
    /**
     * clicks the app bar button
     *
     * @param buttonType
     *
     * @returns {*|void}
     * @throws Error
     */
    clickButton (buttonType) {
      const buttonSelector = this.getButtonSelector(buttonType)
      return this
        .waitForElementVisible(buttonSelector)
        .click(buttonSelector)
    },
    /**
     * returns visibility state of the app bar button
     *
     * @param buttonType
     *
     * @returns {*}
     * @throws Error
     */
    async isButtonVisible (buttonType) {
      const buttonSelector = this.getButtonSelector(buttonType)
      let isVisible = false
      await this.waitForElementPresent({
        selector: buttonSelector,
        abortOnFailure: false
      }, (result) => {
        isVisible = result.value
      })
      if (isVisible) {
        await this.isVisible(buttonSelector, (result) => {
          isVisible = result.value
        })
      }
      return isVisible
    }
  }
}
