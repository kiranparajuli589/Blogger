const {client} = require("nightwatch-api");
module.exports =  {
    url : function () {
        return this.api.launch_url()
    },
    elements :{
        loginModalBtn : {
            selector : 'button[data-bs-target="#loginModal"]',
        },
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
            selector: 'a[type=button].btn-outline-success'
        }
    },
    commands: {
        authenticate : function(dataTable){
            return this.click("@dashboardBtn")
                .waitForElementVisible("@dashboard")
                .setValue('@inputEmailField',dataTable.email)
                .setValue('inputPasswordField', dataTable.password)
                .click('.login-form button[type=submit]')
        }
    }
}
