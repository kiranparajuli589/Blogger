const util = require("util");

module.exports = {
  url: function () {
    return this.api.launchUrl + '/dashboard'
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
        .waitForAnimationsToFinish()
    },
    async getPostDetailById(blogId) {
      const actualBlogData = {}
      const titleRegex = /(?<title>.+) by .+/
      const authorRegex = /by (?<author>.+)/

      const formattedPostSelector = util.format(this.elements.postWrapper.selector, blogId)
      const formattedTitleXpath = util.format(this.elements.postTitle.selector, blogId)
      const formattedContentXpath = util.format(this.elements.postContent.selector, blogId)
      const formattedAuthorXpath = util.format(this.elements.postAuthor.selector, blogId)

      await this
        .waitForElementVisible(formattedPostSelector)
        .useXpath()
        .waitForElementVisible(formattedTitleXpath)
        .getText(formattedTitleXpath, result => {
          const matches = result.value.match(titleRegex).groups
          actualBlogData['title'] = matches.title
        })
        .waitForElementVisible(formattedContentXpath)
        .getText(formattedContentXpath, result => {
          actualBlogData["content"] = result.value
        })
        .waitForElementVisible(formattedAuthorXpath)
        .getText(formattedAuthorXpath, result => {
          const matches = result.value.match(authorRegex).groups
          actualBlogData['author'] = matches.author
        })
        .useCss()
      return actualBlogData
    }
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
    postWrapper: {
      selector: "div[data-test-id='%s']"
    },
    postTitle: {
      selector: '//div[@data-test-id="%s"]//h5[contains(@class, "title")]',
      locateStrategy: 'xpath'
    },
    postContent: {
      selector: '//div[@data-test-id="%s"]//p[contains(@class, "content")]',
      locateStrategy: 'xpath'
    },
    postAuthor: {
      selector: '//div[@data-test-id="%s"]//span[contains(@class, "author")]',
      locateStrategy: 'xpath'
    }
  },

}