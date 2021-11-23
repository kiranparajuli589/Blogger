const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "http://localhost";

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