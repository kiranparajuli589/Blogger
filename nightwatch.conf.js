const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "http://localhost";
const chromedriver = require("chromedriver")
const axios = require("axios")
module.exports = {
  page_objects_path: './tests/acceptance/pageObjects',
  test_settings: {
    default: {
      launch_url:`${HOST}:${PORT}`,
      globals: {
        user_api_url: 'http://localhost:3001/api/users/',
        createdUserList : []
      },
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
