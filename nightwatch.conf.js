const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "http://localhost";
<<<<<<< HEAD

module.exports = {
  page_objects_path: 'tests/acceptance/pageObject/',
  custom_commands_path: 'tests/acceptance/customCommands',
  test_settings: {
    default: {
      launch_url: `${HOST}:${PORT}`,
      globals: {
        waitForAnimationsTimeout: 1000,
      },
      selenium: {
        start_process: false,
        host: 'localhost',
        port: 4444
      },
      desiredCapabilities: {
        browserName: "chrome"
      }
    },
  }
}
=======
const chromedriver = require("chromedriver")

module.exports = {
    page_objects_path: './tests/acceptance/pageObject/',
    test_settings: {
        default: {
            launch_url: `${HOST}:${PORT}`,
            selenium_host: 'localhost',
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['disable-gpu', 'ignore-certificate-errors'],
                    w3c: false
                },
                loggingPrefs: {browser: 'ALL'}
            },
            webdriver: {
                server_path: chromedriver.path,
                cli_args: ['--port=4444'],
                start_process: false,
                port: 4444,
                use_legacy_jsonwire: false
            },
        }
    }
}
>>>>>>> refactored page object
