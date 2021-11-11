const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;

module.exports = {
  test_settings: {
    default: {
      launch_url: `http://localhost:${PORT}`,
    },
    selenium: {
      selenium: {
        start_process: true,
        server_path: require("selenium-server").path,
        cli_args: {
          "webdriver.gecko.driver": require("geckodriver").path,
          "webdriver.chrome.driver": require("chromedriver").path,
          "webdriver.ie.driver":
            process.platform === "win32" ? require("iedriver").path : "",
        },
      },
      webdriver: {
        start_process: false
      }
    },
    firefox: {
      extends: "selenium",
      desiredCapabilities: {
        browserName: "firefox",
        "moz:firefoxOptions": {
          args: ["--headless"],
        },
      },
    },
    chrome: {
      extends: "selenium",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--headless", "--no-sandbox", "--disable-gpu"],
          w3c: false,
        },
      },
    },
  }
}
