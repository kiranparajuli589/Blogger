const {client} = require("nightwatch-api");

module.exports = {
    elements: {
        loginButton : {
            selector : '#login'
        },
        homeButton : {
            selector : '#home'
        },
        dashboardButton : {
            selector : '#dashboard'
        },
        signUpButton : {
            selector : '#signup'
        },
        logOutButton: {
            selector : '#logout'
        }
    },
    commands: {
        clickAppBarButton(buttonSel) {
            const buttons = Object.keys(this.elements)
            if (buttons.includes(buttonSel)) {
                const buttonSelector = this.elements[buttonSel].selector
                return this
                    .waitForElementVisible(buttonSelector)
                    .click(buttonSel)
            } else {
                throw new Error(`Button not available in the app bar.\n
                 Available buttons are:\n${buttons.join(",")}`)
            }
        }
    }
}