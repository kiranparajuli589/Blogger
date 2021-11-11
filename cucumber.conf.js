const {setDefaultTimeout, BeforeAll, Before, AfterAll, After} = require('@cucumber/cucumber')
const {startWebDriver, stopWebDriver, createSession, closeSession} = require('nightwatch-api')

setDefaultTimeout(60000)

const availableBrowsers = ["chrome", "firefox", "ie"];

const browser = process.env.BROWSER || "chrome";

if (!availableBrowsers.includes(browser)) {
    throw new Error(
      "\nInvalid browser selected.\n" +
      "Available browsers: " +
      availableBrowsers.join(", ") +
      "\n"
    );
}

BeforeAll(async function (){
    await startWebDriver({ env: browser })
})

Before((async function(){
    await createSession({ env: browser })
}))

AfterAll(async function(){
    await stopWebDriver()
})

After(async function(){
    await closeSession()
})

