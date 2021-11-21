const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;
const chromedriver = require("chromedriver")
module.exports = {
  test_settings: {
    default: {
      launch_url:`${HOST}:${PORT}`,
      globals: {
        user_api_url: 'http://localhost:3001/api/users/',
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
