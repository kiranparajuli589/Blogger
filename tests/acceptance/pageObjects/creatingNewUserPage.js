const {client} = require("@cucumber/cucumber")
module.exports = {
    url: function() {
        return this.api.launch_url
    },
    elements: {
        signupModalBtn: {
            selector: 'button[data-bs-target="#signupModal"]'
        },
        signupModal: {
            selector: "#signupModal"
        },
        inputUsernameField: {
            selector: 'input#username-signup'
        },
        inputEmailField: {
            selector: 'input#email-signup'
        },
        inputPasswordField: {
            selector: 'input#password-signup'
        },
        submitBtn: {
            selector: '.signup-form button[type=submit]'
        }

    },
    commands: {
        signup: function (userDetails) {
            this.click('@signupModalBtn')
                .waitForElementVisible('@signupModal')
                .setValue('@inputUsernameField',userDetails['username'])
                .setValue('@inputEmailField', userDetails['email'])
                .setValue('@inputPasswordField', userDetails['password'])
                .click('@submitBtn')
        },
    }
}
