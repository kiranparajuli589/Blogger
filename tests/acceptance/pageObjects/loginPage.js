const {client} = require("@cucumber/cucumber")
module.exports = {
    url: function() {
        return this.api.launch_url
    },
    elements: {
        loginModalBtn: {
            selector: 'button[data-bs-target="#loginModal"]'
        },
        loginModal: {
            selector: "#loginModal"
        },
        inputEmailField: {
            selector: 'input#email-login'
        },
        inputPasswordField: {
            selector: 'input#password-login'
        },
        submitBtn: {
            selector: '.login-form button[type=submit]'
        }

    },
    commands: {
        authenticate: function (userDetails) {
            this.click('@loginModalBtn')
                .waitForElementVisible('@loginModal')
                .setValue('@inputEmailField', userDetails['email'])
                .setValue('@inputPasswordField', userDetails['password'])
                .click('@submitBtn')
        }
    }
}
