const {client} = require("nightwatch-api");
const util = require("util");
module.exports =  {
    url : function () {
        return this.api.launch_url()
    },
    elements :{
        createNewPostTitle : {
            selector : 'input#post-title',
        },
        newPostContent : {
            selector: '#post',
        },
        createButton : {
            selector: '.new-post-form button[type=submit]'
        },
        postTitleXpath : {
            selector : '//h5[contains(text(),"%s")]',
            locateStrategy : 'xpath'
        }
    },
    commands: {
        addNewBlogPost : function(blogData){
            return this.waitForElementVisible('@createNewPostTitle')
                .click('@createNewPostTitle')
                .setValue('@createNewPostTitle',blogData.title)
                .waitForElementVisible('@newPostContent')
                .click('@newPostContent')
                .setValue('@newPostContent',blogData.content)

        },
        clickCreateButton : function(){
            return this.waitForElementVisible('@createButton')
                .click('@createButton')
        },
        viewCreatedPost : function(dataTable){
            const blogData = dataTable.rowsHash()
            const formattedXpath = util.format('@postTitleXpath',blogData.title)
            return this.waitForElementVisible(formattedXpath);
        }
    }
}