require("dotenv").config()
const PORT = process.env.PORT || 3001
module.exports = {
  test_settings: {
    default: {
      launch_url: `http://host.docker.internal:${PORT}`,

      selenium_host: "localhost",
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["disable-gpu", "ignore-certificate-errors"],
          w3c: false
        },
        loggingPrefs: { browser: "ALL" }
      },
      webdriver: {
        cli_args: ["--port=4444"],
        start_process: false,
        port: 4444,
        use_legacy_jsonwire: false
      }

    }
  }
}
