const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;

module.exports = {
    test_settings : {
        default : {
            launch_url : `http://localhost:${PORT}`,
            selenium: {
                start_process : false,
                port : 4444,
                host : 'localhost'
            },
            desiredCapabilities : {
                browserName: 'firefox'
            }
        }
    }
}
