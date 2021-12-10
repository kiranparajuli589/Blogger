const {client} = require("nightwatch-api");
const util = require("util");
module.exports = {
    url: function () {
        return this.api.launch_url()
    },
    elements: {
        createNewPostTitle: {
            selector: 'input#post-title',
        },
        newPostContent: {
            selector: '#post',
        },
        createButton: {
            selector: '.new-post-form button[type=submit]'
        },
        postTitleXpath: {
            selector: '//h5[contains(text(),"%s")]',
            locateStrategy: 'xpath'
        }
    },
    commands: {
        addNewBlogPost(blogData) {
            return this
                .waitForElementVisible('@createNewPostTitle')
                .click('@createNewPostTitle')
                .setValue('@createNewPostTitle', blogData.title)
                .waitForElementVisible('@newPostContent')
                .click('@newPostContent')
                .setValue('@newPostContent', blogData.content)
                .waitForElementVisible('@createButton')
                .click('@createButton')
        },
        viewCreatedPost(blogData) {
            const formattedXpath = util.format(this.elements.postTitleXpath, blogData.title)
            return this.waitForElementVisible(formattedXpath);
        }
    }
}