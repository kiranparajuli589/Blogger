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
            return this.waitForElementVisible("@loginModalBtn")
                .click("@loginModalBtn")
                .waitForElementVisible("@loginModal")
                .setValue('@inputEmailField',dataTable.email)
                .setValue('@inputPasswordField', dataTable.password)
                .click('@loginFormBtn')
        },
        checkForDashboard: function (){
            return this.assert.containsText("@dashboardBtn", 'Dashboard')
        }
    }
}
