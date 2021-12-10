const {client} = require("nightwatch-api");

module.exports =  {
    url : function () {
        return this.api.launch_url()
    },
    elements :{
        loginModal : {
            selector: "#loginModal",
        },
        inputEmailField : {
            selector:'input#email-login'
        },
        inputPasswordField : {
            selector :'input#password-login'
        },
        loginFormBtn : {
            selector : '.login-form button[type=submit]'
        },
        dashboardBtn : {
            selector: '//a[.="Dashboard"]',
            locateStrategy: 'xpath'
        }
    },
    commands: {
        submit() {
            return this
                .click('@loginFormBtn')
                .waitForElementNotVisible("@loginModal")
        },
        authenticate(dataTable){
            return this
                .waitForElementVisible('@loginModalBtn')
                .click("@loginModalBtn")
                .waitForElementVisible("@loginModal")
                .setValue('@inputEmailField',dataTable.email)
                .setValue('@inputPasswordField', dataTable.password)
        },

    }
}
