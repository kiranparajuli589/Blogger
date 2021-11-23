const {client} = require("nightwatch-api");
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
        createBtn : {
            selector: '.new-post-form button[type=submit]'
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
        }
    }
}